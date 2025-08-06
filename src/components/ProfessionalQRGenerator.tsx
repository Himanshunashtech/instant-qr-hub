import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Link, 
  FileText, 
  Grid3X3, 
  User, 
  MessageSquare, 
  Smartphone, 
  Mail, 
  Phone,
  Download, 
  Copy, 
  Printer, 
  Upload,
  X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QRType {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const qrTypes: QRType[] = [
  { id: 'url', label: 'URL', icon: Link, color: 'text-green-500' },
  { id: 'pdf', label: 'PDF', icon: FileText, color: 'text-red-500' },
  { id: 'multi-url', label: 'Multi-URL', icon: Grid3X3, color: 'text-blue-500' },
  { id: 'contact', label: 'Contact', icon: User, color: 'text-purple-500' },
  { id: 'text', label: 'Plain Text', icon: MessageSquare, color: 'text-gray-500' },
  { id: 'app', label: 'App', icon: Smartphone, color: 'text-indigo-500' },
  { id: 'sms', label: 'SMS', icon: MessageSquare, color: 'text-orange-500' },
  { id: 'email', label: 'Email', icon: Mail, color: 'text-cyan-500' },
  { id: 'phone', label: 'Phone', icon: Phone, color: 'text-emerald-500' },
];

interface ContactData {
  firstName: string;
  lastName: string;
  organization: string;
  phone: string;
  email: string;
  url: string;
}

export const ProfessionalQRGenerator = () => {
  const [selectedType, setSelectedType] = useState('url');
  const [qrCode, setQrCode] = useState('');
  const [logo, setLogo] = useState<string | null>(null);
  const [trackScans, setTrackScans] = useState(false);
  const [removeWatermark, setRemoveWatermark] = useState(false);
  
  // Content states
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [smsText, setSmsText] = useState('');
  const [contactData, setContactData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    organization: '',
    phone: '',
    email: '',
    url: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    generateQR();
  }, [selectedType, url, text, phone, email, smsText, contactData, logo]);

  const getQRContent = () => {
    switch (selectedType) {
      case 'url':
        return url;
      case 'text':
        return text;
      case 'phone':
        return `tel:${phone}`;
      case 'email':
        return `mailto:${email}`;
      case 'sms':
        return `sms:${phone}?body=${encodeURIComponent(smsText)}`;
      case 'contact':
        return `BEGIN:VCARD
VERSION:3.0
FN:${contactData.firstName} ${contactData.lastName}
ORG:${contactData.organization}
TEL:${contactData.phone}
EMAIL:${contactData.email}
URL:${contactData.url}
END:VCARD`;
      default:
        return url;
    }
  };

  const generateQR = async () => {
    const content = getQRContent();
    if (!content.trim()) {
      setQrCode('');
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      await QRCode.toCanvas(canvas, content, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });

      // Add logo if present
      if (logo) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const logoImg = new Image();
          logoImg.onload = () => {
            const logoSize = canvas.width * 0.2; // 20% of QR code size
            const x = (canvas.width - logoSize) / 2;
            const y = (canvas.height - logoSize) / 2;
            
            // Draw white background for logo
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(x - 5, y - 5, logoSize + 10, logoSize + 10);
            
            // Draw logo
            ctx.drawImage(logoImg, x, y, logoSize, logoSize);
            
            setQrCode(canvas.toDataURL());
          };
          logoImg.src = logo;
        }
      } else {
        setQrCode(canvas.toDataURL());
      }

      // Save to history
      const history = JSON.parse(localStorage.getItem('qr-history') || '[]');
      const newEntry = {
        id: Date.now(),
        text: content,
        type: 'generated',
        qrType: selectedType,
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

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadQR = () => {
    if (!qrCode) return;
    
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `qr-code-${selectedType}-${Date.now()}.png`;
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
      toast({
        title: "Success",
        description: "QR code copied to clipboard"
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
            <h2>QR Code - ${selectedType.toUpperCase()}</h2>
            <img src="${qrCode}" style="max-width: 100%;" />
            <p>Generated: ${new Date().toLocaleDateString()}</p>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const renderContentInput = () => {
    switch (selectedType) {
      case 'url':
        return (
          <div className="space-y-2">
            <Label htmlFor="url" className="text-dark-panel-foreground">Website URL</Label>
            <Input
              id="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-2">
            <Label htmlFor="text" className="text-dark-panel-foreground">Plain Text</Label>
            <Textarea
              id="text"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground min-h-[100px]"
            />
          </div>
        );
      
      case 'phone':
        return (
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-dark-panel-foreground">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
          </div>
        );
      
      case 'email':
        return (
          <div className="space-y-2">
            <Label htmlFor="email" className="text-dark-panel-foreground">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
          </div>
        );
      
      case 'sms':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sms-phone" className="text-dark-panel-foreground">Phone Number</Label>
              <Input
                id="sms-phone"
                placeholder="+1234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sms-text" className="text-dark-panel-foreground">Message</Label>
              <Textarea
                id="sms-text"
                placeholder="Your message here..."
                value={smsText}
                onChange={(e) => setSmsText(e.target.value)}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-dark-panel-foreground">First Name</Label>
                <Input
                  value={contactData.firstName}
                  onChange={(e) => setContactData({...contactData, firstName: e.target.value})}
                  className="bg-dark-input border-dark-border text-dark-panel-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-dark-panel-foreground">Last Name</Label>
                <Input
                  value={contactData.lastName}
                  onChange={(e) => setContactData({...contactData, lastName: e.target.value})}
                  className="bg-dark-input border-dark-border text-dark-panel-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Organization</Label>
              <Input
                value={contactData.organization}
                onChange={(e) => setContactData({...contactData, organization: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Phone</Label>
              <Input
                value={contactData.phone}
                onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Email</Label>
              <Input
                value={contactData.email}
                onChange={(e) => setContactData({...contactData, email: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Website</Label>
              <Input
                value={contactData.url}
                onChange={(e) => setContactData({...contactData, url: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Grid3X3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">THE QR CODE GENERATOR</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The QR Code Generator – Create free QR Codes instantly
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Quickly generate either a static or a dynamic QR Code, tailored for your specific use—such as linking to a website, contact details, or a digital menu. No fine print, no surprises—just a straightforward tool built for professionals who need efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Generator */}
          <div className="bg-dark-panel rounded-xl p-6">
            {/* QR Type Selection */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {qrTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${
                      selectedType === type.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-dark-input text-dark-panel-foreground hover:bg-dark-border'
                    }`}
                  >
                    <IconComponent className={`h-5 w-5 ${selectedType !== type.id ? type.color : ''}`} />
                    <span className="text-xs font-medium">{type.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-panel-foreground mb-4">
                {qrTypes.find(t => t.id === selectedType)?.label} QR Code
              </h3>
              {renderContentInput()}
            </div>

            {/* Logo Upload */}
            <div className="mb-6">
              <Label className="text-dark-panel-foreground mb-3 block">Add Logo (Optional)</Label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="sm"
                  className="bg-dark-input border-dark-border text-dark-panel-foreground hover:bg-dark-border"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Logo
                </Button>
                {logo && (
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-8 h-8 object-cover rounded" />
                    <Button
                      onClick={removeLogo}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-dark-panel-foreground">Track your scans ⭐</span>
                <Switch checked={trackScans} onCheckedChange={setTrackScans} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-dark-panel-foreground">Remove watermark ⭐</span>
                <Switch checked={removeWatermark} onCheckedChange={setRemoveWatermark} />
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex flex-col">
            {/* QR Code Preview */}
            <div className="bg-white rounded-xl p-8 mb-6 text-center border">
              {qrCode ? (
                <div className="space-y-4">
                  <img 
                    src={qrCode} 
                    alt="Generated QR Code" 
                    className="mx-auto max-w-full h-auto"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <div className="text-sm text-gray-600">
                    {selectedType.toUpperCase()} QR Code
                  </div>
                </div>
              ) : (
                <div className="py-12">
                  <Grid3X3 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">Enter content to generate QR code</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {qrCode && (
              <div className="grid grid-cols-4 gap-3">
                <Button
                  onClick={downloadQR}
                  variant="qr"
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Download className="h-5 w-5" />
                  <span className="text-xs">Save</span>
                </Button>
                <Button
                  onClick={downloadQR}
                  variant="qr"
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Download className="h-5 w-5" />
                  <span className="text-xs">Download</span>
                </Button>
                <Button
                  onClick={copyToClipboard}
                  variant="qr"
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Copy className="h-5 w-5" />
                  <span className="text-xs">Copy</span>
                </Button>
                <Button
                  onClick={printQR}
                  variant="qr"
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Printer className="h-5 w-5" />
                  <span className="text-xs">Print</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};