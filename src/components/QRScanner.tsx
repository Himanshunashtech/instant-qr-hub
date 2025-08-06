import React, { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, CameraOff, ExternalLink, Copy, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ScanResult {
  text: string;
  type: 'url' | 'email' | 'phone' | 'text';
}

export const QRScanner = () => {
  const [scanner, setScanner] = useState<Html5QrcodeScanner | null>(null);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    checkCameraPermission();
    return () => {
      if (scanner) {
        scanner.clear().catch(console.error);
      }
    };
  }, [scanner]);

  const checkCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      setHasPermission(true);
    } catch (error) {
      setHasPermission(false);
    }
  };

  const detectResultType = (text: string): ScanResult['type'] => {
    if (text.match(/^https?:\/\//i)) return 'url';
    if (text.match(/^mailto:/i) || text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'email';
    if (text.match(/^tel:/i) || text.match(/^\+?[\d\s\-\(\)]+$/)) return 'phone';
    return 'text';
  };

  const startScanning = () => {
    if (!scannerRef.current) return;

    const newScanner = new Html5QrcodeScanner(
      'qr-scanner',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        showTorchButtonIfSupported: true,
        showZoomSliderIfSupported: true,
      },
      false
    );

    newScanner.render(
      (decodedText) => {
        const type = detectResultType(decodedText);
        const result: ScanResult = { text: decodedText, type };
        
        setScanResult(result);
        setIsScanning(false);
        newScanner.clear();

        // Save to history
        const history = JSON.parse(localStorage.getItem('qr-history') || '[]');
        const newEntry = {
          id: Date.now(),
          text: decodedText,
          type: 'scanned',
          timestamp: new Date().toISOString()
        };
        
        const updatedHistory = [newEntry, ...history.slice(0, 9)];
        localStorage.setItem('qr-history', JSON.stringify(updatedHistory));

        toast({
          title: "QR Code Scanned",
          description: `Detected ${type}: ${decodedText.substring(0, 50)}${decodedText.length > 50 ? '...' : ''}`
        });
      },
      (error) => {
        console.error('QR scan error:', error);
      }
    );

    setScanner(newScanner);
    setIsScanning(true);
  };

  const stopScanning = () => {
    if (scanner) {
      scanner.clear().catch(console.error);
      setScanner(null);
    }
    setIsScanning(false);
  };

  const handleResult = (result: ScanResult) => {
    switch (result.type) {
      case 'url':
        window.open(result.text, '_blank', 'noopener,noreferrer');
        break;
      case 'email':
        const emailUrl = result.text.startsWith('mailto:') ? result.text : `mailto:${result.text}`;
        window.location.href = emailUrl;
        break;
      case 'phone':
        const phoneUrl = result.text.startsWith('tel:') ? result.text : `tel:${result.text}`;
        window.location.href = phoneUrl;
        break;
      default:
        copyToClipboard(result.text);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied",
        description: "Text copied to clipboard"
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getTypeIcon = (type: ScanResult['type']) => {
    switch (type) {
      case 'url': return <ExternalLink className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'phone': return <Phone className="h-4 w-4" />;
      default: return <Copy className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: ScanResult['type']) => {
    switch (type) {
      case 'url': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'email': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'phone': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (hasPermission === false) {
    return (
      <Card className="bg-gradient-card shadow-card border-0">
        <CardContent className="text-center py-8">
          <CameraOff className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Camera Access Required</h3>
          <p className="text-muted-foreground mb-4">
            Please allow camera access to scan QR codes
          </p>
          <Button onClick={checkCameraPermission} variant="default">
            Request Permission
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-scanner bg-clip-text text-transparent">
          Scan QR Code
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          {!isScanning ? (
            <Button
              onClick={startScanning}
              variant="default"
              size="lg"
              className="w-full"
            >
              <Camera className="h-5 w-5 mr-2" />
              Start Camera
            </Button>
          ) : (
            <Button
              onClick={stopScanning}
              variant="destructive"
              size="lg"
              className="w-full"
            >
              <CameraOff className="h-5 w-5 mr-2" />
              Stop Scanning
            </Button>
          )}
        </div>

        <div 
          id="qr-scanner" 
          ref={scannerRef}
          className={`${isScanning ? 'block' : 'hidden'} rounded-lg overflow-hidden`}
        />

        {scanResult && (
          <div className="space-y-4 p-4 bg-accent/30 rounded-lg border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Scan Result</h3>
              <Badge className={getTypeColor(scanResult.type)}>
                {getTypeIcon(scanResult.type)}
                <span className="ml-1 capitalize">{scanResult.type}</span>
              </Badge>
            </div>
            
            <div className="p-3 bg-background rounded border break-all text-sm">
              {scanResult.text}
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleResult(scanResult)}
                variant="default"
                size="sm"
              >
                {scanResult.type === 'url' ? 'Open Link' : 
                 scanResult.type === 'email' ? 'Send Email' :
                 scanResult.type === 'phone' ? 'Call Number' : 'Copy Text'}
              </Button>
              
              <Button
                onClick={() => copyToClipboard(scanResult.text)}
                variant="outline"
                size="sm"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};