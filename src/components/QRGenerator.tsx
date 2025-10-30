import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Download, Copy, Printer, Palette, QrCode, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const QRGenerator = () => {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [qrColor, setQrColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(60);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (text.trim()) {
      generateQR();
    } else {
      setQrCode('');
    }
  }, [text, qrColor, bgColor, logo, logoSize]);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          title: "Error",
          description: "Logo size should be less than 2MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
  };

  const generateQR = async () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Generate basic QR code
      await QRCode.toCanvas(canvas, text, {
        width: 300,
        margin: 2,
        color: {
          dark: qrColor,
          light: bgColor
        },
        errorCorrectionLevel: 'H' // High error correction for logo
      });

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Add logo if exists
      if (logo) {
        const img = new Image();
        img.onload = () => {
          // Calculate logo position (center of QR code)
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const logoX = centerX - logoSize / 2;
          const logoY = centerY - logoSize / 2;

          // Create white background for logo
          ctx.fillStyle = bgColor;
          ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);

          // Draw logo
          ctx.drawImage(img, logoX, logoY, logoSize, logoSize);

          // Update QR code state
          const qrDataUrl = canvas.toDataURL();
          setQrCode(qrDataUrl);
          
          saveToHistory(qrDataUrl);
        };
        img.src = logo;
      } else {
        const qrDataUrl = canvas.toDataURL();
        setQrCode(qrDataUrl);
        saveToHistory(qrDataUrl);
      }
      
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive"
      });
    }
  };

  const saveToHistory = (qrDataUrl: string) => {
    const history = JSON.parse(localStorage.getItem('qr-history') || '[]');
    const newEntry = {
      id: Date.now(),
      text,
      type: 'generated',
      timestamp: new Date().toISOString(),
      hasLogo: !!logo
    };
    
    const updatedHistory = [newEntry, ...history.slice(0, 9)];
    localStorage.setItem('qr-history', JSON.stringify(updatedHistory));
  };

  const downloadQR = () => {
    if (!qrCode) return;
    
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `qr-code-${Date.now()}.png`;
    link.click();
    
    toast({
      title: "Success",
      description: "QR code downloaded successfully"
    });
  };

  const copyToClipboard = async () => {
    if (!qrCode) return;
    
    try {
      const response = await fetch(qrCode);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      
      toast({
        title: "Success",
        description: "QR code copied to clipboard"
      });
    } catch (error) {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Success",
        description: "Text copied to clipboard"
      });
    }
  };

  const printQR = () => {
    if (!qrCode) return;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title>QR Code</title></head>
          <body style="text-align: center; padding: 20px;">
            <h2>QR Code</h2>
            <img src="${qrCode}" style="max-width: 100%;" />
            <p>Generated: ${new Date().toLocaleDateString()}</p>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 bg-blue-600 rounded-lg">
            <QrCode className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            QR Generator
          </CardTitle>
        </div>
        <p className="text-gray-600 text-sm">Create custom QR codes with logo</p>
      </CardHeader>
      
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="qr-text" className="text-sm font-medium text-gray-700">
            Enter text or URL
          </Label>
          <Textarea
            id="qr-text"
            placeholder="https://example.com or any text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[100px] resize-none border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Foreground Color */}
          <div className="space-y-2">
            <Label htmlFor="qr-color" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Palette className="h-4 w-4" />
              QR Color
            </Label>
            <div className="flex gap-2">
              <Input
                id="qr-color"
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="h-10 w-full cursor-pointer border border-gray-300 rounded-lg"
              />
              <div 
                className="w-10 h-10 rounded-lg border border-gray-300"
                style={{ backgroundColor: qrColor }}
              />
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-2">
            <Label htmlFor="bg-color" className="text-sm font-medium text-gray-700">
              Background
            </Label>
            <div className="flex gap-2">
              <Input
                id="bg-color"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-10 w-full cursor-pointer border border-gray-300 rounded-lg"
              />
              <div 
                className="w-10 h-10 rounded-lg border border-gray-300"
                style={{ backgroundColor: bgColor }}
              />
            </div>
          </div>
        </div>

        {/* Logo Upload Section */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Logo (Optional)
          </Label>
          
          {!logo ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
                id="logo-upload"
              />
              <Label 
                htmlFor="logo-upload" 
                className="cursor-pointer text-blue-600 hover:text-blue-700"
              >
                Click to upload logo
              </Label>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG up to 2MB
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">Logo uploaded</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Label htmlFor="logo-size" className="text-xs text-gray-600">
                      Size:
                    </Label>
                    <Input
                      id="logo-size"
                      type="range"
                      min="40"
                      max="100"
                      value={logoSize}
                      onChange={(e) => setLogoSize(parseInt(e.target.value))}
                      className="w-20"
                    />
                    <span className="text-xs text-gray-600">{logoSize}px</span>
                  </div>
                </div>
                <Button
                  onClick={removeLogo}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Hidden canvas for QR generation */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {qrCode && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex justify-center p-4 bg-white rounded-lg border border-gray-200">
              <img 
                src={qrCode} 
                alt="Generated QR Code" 
                className="max-w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={downloadQR}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
              
              <Button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 transition-colors"
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
              
              <Button
                onClick={printQR}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 transition-colors"
              >
                <Printer className="h-4 w-4" />
                Print
              </Button>
            </div>
          </div>
        )}

        {!qrCode && text.trim() && (
          <div className="text-center py-8 text-gray-500">
            <QrCode className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>Enter text above to generate QR code</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};