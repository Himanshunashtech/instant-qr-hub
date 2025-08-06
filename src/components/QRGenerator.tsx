import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Copy, Printer, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const QRGenerator = () => {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [qrColor, setQrColor] = useState('#262983');
  const [qrSize, setQrSize] = useState('256');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (text.trim()) {
      generateQR();
    } else {
      setQrCode('');
    }
  }, [text, qrColor, qrSize]);

  const generateQR = async () => {
    try {
      const qrOptions = {
        width: parseInt(qrSize),
        color: {
          dark: qrColor,
          light: '#FFFFFF'
        },
        margin: 2
      };
      
      const qrDataUrl = await QRCode.toDataURL(text, qrOptions);
      setQrCode(qrDataUrl);
      
      // Save to history
      const history = JSON.parse(localStorage.getItem('qr-history') || '[]');
      const newEntry = {
        id: Date.now(),
        text,
        type: 'generated',
        timestamp: new Date().toISOString()
      };
      
      const updatedHistory = [newEntry, ...history.slice(0, 9)];
      localStorage.setItem('qr-history', JSON.stringify(updatedHistory));
      
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive"
      });
    }
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
      // Fallback: copy the text instead
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
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Generate QR Code
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="qr-text" className="text-sm font-medium">
            Enter text, URL, or data
          </Label>
          <Textarea
            id="qr-text"
            placeholder="Type your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="qr-color" className="text-sm font-medium flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Color
            </Label>
            <Input
              id="qr-color"
              type="color"
              value={qrColor}
              onChange={(e) => setQrColor(e.target.value)}
              className="h-10 w-full cursor-pointer"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="qr-size" className="text-sm font-medium">
              Size
            </Label>
            <Select value={qrSize} onValueChange={setQrSize}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="128">Small (128px)</SelectItem>
                <SelectItem value="256">Medium (256px)</SelectItem>
                <SelectItem value="512">Large (512px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {qrCode && (
          <div className="space-y-4">
            <div className="flex justify-center p-6 bg-white rounded-lg border">
              <img 
                src={qrCode} 
                alt="Generated QR Code" 
                className="max-w-full h-auto"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={downloadQR}
                variant="qr"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
              
              <Button
                onClick={copyToClipboard}
                variant="qr"
                size="sm"
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
              
              <Button
                onClick={printQR}
                variant="qr"
                size="sm"
                className="flex items-center gap-2"
              >
                <Printer className="h-4 w-4" />
                Print
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};