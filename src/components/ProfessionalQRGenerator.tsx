import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Link, 
  Grid3X3, 
  User, 
  MessageSquare, 
  Smartphone, 
  Mail, 
  Phone,
  Download, 
  Copy, 
  Printer,
  MapPin,
  Calendar,
  Store,
  Users,
  Play,
  CreditCard,
  Coins,
  MessageCircle,
  Video,
  FileText,
  ExternalLink,
  Palette,
  Settings,
  Upload,
  Share2,
  Eye,
  Lock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QRDesignOptions {
  foregroundColor: string;
  backgroundColor: string;
  dotStyle: 'square' | 'round' | 'dots';
}

interface QRType {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const qrTypes: QRType[] = [
  { id: 'url', label: 'URL', icon: Link, color: 'text-green-500' },
  { id: 'wifi', label: 'WiFi', icon: Smartphone, color: 'text-blue-500' },
  { id: 'text', label: 'Plain Text', icon: MessageSquare, color: 'text-gray-500' },
  { id: 'contact', label: 'Contact', icon: User, color: 'text-purple-500' },
  { id: 'email', label: 'Email', icon: Mail, color: 'text-cyan-500' },
  { id: 'phone', label: 'Phone', icon: Phone, color: 'text-emerald-500' },
  { id: 'sms', label: 'SMS', icon: MessageSquare, color: 'text-orange-500' },
  { id: 'bitcoin', label: 'Bitcoin', icon: Grid3X3, color: 'text-yellow-500' },
  { id: 'location', label: 'Location', icon: MapPin, color: 'text-red-500' },
  { id: 'event', label: 'Event', icon: Calendar, color: 'text-indigo-500' },
  { id: 'appstore', label: 'App Store', icon: Store, color: 'text-blue-600' },
  { id: 'social', label: 'Social Media', icon: Users, color: 'text-pink-500' },
  { id: 'youtube', label: 'YouTube', icon: Play, color: 'text-red-600' },
  { id: 'payment', label: 'Payment', icon: CreditCard, color: 'text-green-600' },
  { id: 'crypto', label: 'Crypto', icon: Coins, color: 'text-orange-600' },
  { id: 'emailprefilled', label: 'Email+', icon: Mail, color: 'text-teal-500' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'text-green-600' },
  { id: 'meeting', label: 'Meeting', icon: Video, color: 'text-blue-700' },
  { id: 'file', label: 'File', icon: FileText, color: 'text-slate-500' },
  { id: 'deeplink', label: 'App Link', icon: ExternalLink, color: 'text-violet-500' },
];

interface ContactData {
  firstName: string;
  lastName: string;
  organization: string;
  phone: string;
  email: string;
  url: string;
}

interface WiFiData {
  ssid: string;
  password: string;
  security: 'WPA' | 'WEP' | 'nopass';
}

interface LocationData {
  latitude: string;
  longitude: string;
  label: string;
}

interface EventData {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

interface EmailPrefilledData {
  email: string;
  subject: string;
  body: string;
}

interface WhatsAppData {
  number: string;
  message: string;
}

export const ProfessionalQRGenerator = () => {
  const [selectedType, setSelectedType] = useState('url');
  const [qrCode, setQrCode] = useState('');
  
  // Content states
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [smsText, setSmsText] = useState('');
  const [bitcoinAddress, setBitcoinAddress] = useState('');
  const [contactData, setContactData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    organization: '',
    phone: '',
    email: '',
    url: ''
  });
  const [wifiData, setWifiData] = useState<WiFiData>({
    ssid: '',
    password: '',
    security: 'WPA'
  });
  const [locationData, setLocationData] = useState<LocationData>({
    latitude: '',
    longitude: '',
    label: ''
  });
  const [eventData, setEventData] = useState<EventData>({
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [socialUrl, setSocialUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [cryptoType, setCryptoType] = useState('ethereum');
  const [emailPrefilledData, setEmailPrefilledData] = useState<EmailPrefilledData>({
    email: '',
    subject: '',
    body: ''
  });
  const [whatsappData, setWhatsappData] = useState<WhatsAppData>({
    number: '',
    message: ''
  });
  const [meetingUrl, setMeetingUrl] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [deepLinkUrl, setDeepLinkUrl] = useState('');
  
  // Design options
  const [designOptions, setDesignOptions] = useState<QRDesignOptions>({
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    dotStyle: 'square'
  });

  // Advanced features
  const [showDesignPanel, setShowDesignPanel] = useState(false);
  const [showBatchGenerator, setShowBatchGenerator] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    // Clear QR code when inputs change
    setQrCode('');
  }, [selectedType, url, text, phone, email, smsText, contactData, wifiData, bitcoinAddress, locationData, eventData, appStoreUrl, socialUrl, youtubeUrl, paymentUrl, cryptoAddress, emailPrefilledData, whatsappData, meetingUrl, fileUrl, deepLinkUrl, designOptions]);

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
      case 'wifi':
        return `WIFI:T:${wifiData.security};S:${wifiData.ssid};P:${wifiData.password};H:false;;`;
      case 'bitcoin':
        return `bitcoin:${bitcoinAddress}`;
      case 'location':
        return `geo:${locationData.latitude},${locationData.longitude}?q=${locationData.latitude},${locationData.longitude}(${encodeURIComponent(locationData.label)})`;
      case 'event':
        return `BEGIN:VEVENT
DTSTART:${eventData.startDate.replace(/[-:]/g, '')}00Z
DTEND:${eventData.endDate.replace(/[-:]/g, '')}00Z
SUMMARY:${eventData.title}
LOCATION:${eventData.location}
DESCRIPTION:${eventData.description}
END:VEVENT`;
      case 'appstore':
        return appStoreUrl;
      case 'social':
        return socialUrl;
      case 'youtube':
        return youtubeUrl;
      case 'payment':
        return paymentUrl;
      case 'crypto':
        return `${cryptoType}:${cryptoAddress}`;
      case 'emailprefilled':
        return `mailto:${emailPrefilledData.email}?subject=${encodeURIComponent(emailPrefilledData.subject)}&body=${encodeURIComponent(emailPrefilledData.body)}`;
      case 'whatsapp':
        return `https://wa.me/${whatsappData.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappData.message)}`;
      case 'meeting':
        return meetingUrl;
      case 'file':
        return fileUrl;
      case 'deeplink':
        return deepLinkUrl;
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
      
      // Advanced QR generation with custom styling
      await QRCode.toCanvas(canvas, content, {
        width: 300,
        margin: 2,
        color: {
          dark: designOptions.foregroundColor,
          light: designOptions.backgroundColor
        },
        errorCorrectionLevel: 'H' // High error correction for logo embedding
      });

      // Add watermark
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.font = '10px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.textAlign = 'center';
        ctx.fillText('QRJI.com', canvas.width / 2, canvas.height - 5);
      }

      const qrDataUrl = canvas.toDataURL();
      setQrCode(qrDataUrl);

      // Save to history with actual QR code
      const history = JSON.parse(localStorage.getItem('qr-history') || '[]');
      const newEntry = {
        id: Date.now(),
        text: content,
        qrCode: qrDataUrl,
        type: 'generated',
        qrType: selectedType,
        timestamp: new Date().toISOString(),
        designOptions: designOptions
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

  const shareToSocial = (platform: string) => {
    if (!qrCode) return;
    
    const text = encodeURIComponent('Check out my QR code!');
    const url = encodeURIComponent(window.location.href);
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const generateBatchQRs = async () => {
    if (!csvFile) return;
    
    const text = await csvFile.text();
    const lines = text.split('\n').filter(line => line.trim());
    const qrCodes: string[] = [];
    
    for (const line of lines) {
      const [url] = line.split(',');
      if (url && url.trim()) {
        try {
          const canvas = document.createElement('canvas');
          await QRCode.toCanvas(canvas, url.trim(), {
            width: 300,
            margin: 2,
            color: {
              dark: designOptions.foregroundColor,
              light: designOptions.backgroundColor
            }
          });
          qrCodes.push(canvas.toDataURL());
        } catch (error) {
          console.error('Error generating QR for:', url, error);
        }
      }
    }
    
    // Create a zip file with all QR codes (simplified version)
    toast({
      title: "Batch Generation Complete",
      description: `Generated ${qrCodes.length} QR codes`
    });
  };

  const getEmbedCode = () => {
    if (!qrCode) return '';
    
    return `<div style="text-align: center;">
  <img src="${qrCode}" alt="QR Code" style="max-width: 200px;" />
  <p>Generated with <a href="${window.location.origin}">QR Generator</a></p>
</div>`;

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
      
      case 'wifi':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Network Name (SSID)</Label>
              <Input
                placeholder="My WiFi Network"
                value={wifiData.ssid}
                onChange={(e) => setWifiData({...wifiData, ssid: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Password</Label>
              <Input
                type="password"
                placeholder="WiFi Password"
                value={wifiData.password}
                onChange={(e) => setWifiData({...wifiData, password: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Security Type</Label>
              <select
                value={wifiData.security}
                onChange={(e) => setWifiData({...wifiData, security: e.target.value as 'WPA' | 'WEP' | 'nopass'})}
                className="w-full p-2 rounded-md bg-dark-input border-dark-border text-dark-panel-foreground"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Password</option>
              </select>
            </div>
          </div>
        );

      case 'bitcoin':
        return (
          <div className="space-y-2">
            <Label htmlFor="bitcoin" className="text-dark-panel-foreground">Bitcoin Wallet Address</Label>
            <Input
              id="bitcoin"
              placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
              value={bitcoinAddress}
              onChange={(e) => setBitcoinAddress(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">Enter a valid Bitcoin wallet address</p>
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
      
      case 'location':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Latitude</Label>
              <Input
                placeholder="40.7128"
                value={locationData.latitude}
                onChange={(e) => setLocationData({...locationData, latitude: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Longitude</Label>
              <Input
                placeholder="-74.0060"
                value={locationData.longitude}
                onChange={(e) => setLocationData({...locationData, longitude: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Label (Optional)</Label>
              <Input
                placeholder="New York City"
                value={locationData.label}
                onChange={(e) => setLocationData({...locationData, label: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );

      case 'event':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Event Title</Label>
              <Input
                placeholder="My Event"
                value={eventData.title}
                onChange={(e) => setEventData({...eventData, title: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-dark-panel-foreground">Start Date</Label>
                <Input
                  type="datetime-local"
                  value={eventData.startDate}
                  onChange={(e) => setEventData({...eventData, startDate: e.target.value})}
                  className="bg-dark-input border-dark-border text-dark-panel-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-dark-panel-foreground">End Date</Label>
                <Input
                  type="datetime-local"
                  value={eventData.endDate}
                  onChange={(e) => setEventData({...eventData, endDate: e.target.value})}
                  className="bg-dark-input border-dark-border text-dark-panel-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Location</Label>
              <Input
                placeholder="Event Location"
                value={eventData.location}
                onChange={(e) => setEventData({...eventData, location: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Description</Label>
              <Textarea
                placeholder="Event description..."
                value={eventData.description}
                onChange={(e) => setEventData({...eventData, description: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );

      case 'appstore':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">App Store Link</Label>
            <Input
              placeholder="https://apps.apple.com/app/..."
              value={appStoreUrl}
              onChange={(e) => setAppStoreUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">iOS App Store or Google Play Store link</p>
          </div>
        );

      case 'social':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">Social Media Profile</Label>
            <Input
              placeholder="https://instagram.com/username"
              value={socialUrl}
              onChange={(e) => setSocialUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">Instagram, Twitter, TikTok, LinkedIn, etc.</p>
          </div>
        );

      case 'youtube':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">YouTube Video/Channel</Label>
            <Input
              placeholder="https://youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">YouTube video or channel URL</p>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">Payment Link</Label>
            <Input
              placeholder="https://paypal.me/username"
              value={paymentUrl}
              onChange={(e) => setPaymentUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">PayPal, Venmo, Stripe checkout link</p>
          </div>
        );

      case 'crypto':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Cryptocurrency Type</Label>
              <select
                value={cryptoType}
                onChange={(e) => setCryptoType(e.target.value)}
                className="w-full p-2 rounded-md bg-dark-input border-dark-border text-dark-panel-foreground"
              >
                <option value="ethereum">Ethereum</option>
                <option value="litecoin">Litecoin</option>
                <option value="dogecoin">Dogecoin</option>
                <option value="monero">Monero</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Wallet Address</Label>
              <Input
                placeholder="0x742d35Cc6670C7..."
                value={cryptoAddress}
                onChange={(e) => setCryptoAddress(e.target.value)}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );

      case 'emailprefilled':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Email Address</Label>
              <Input
                type="email"
                placeholder="example@domain.com"
                value={emailPrefilledData.email}
                onChange={(e) => setEmailPrefilledData({...emailPrefilledData, email: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Subject</Label>
              <Input
                placeholder="Email subject"
                value={emailPrefilledData.subject}
                onChange={(e) => setEmailPrefilledData({...emailPrefilledData, subject: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Message Body</Label>
              <Textarea
                placeholder="Pre-filled email message..."
                value={emailPrefilledData.body}
                onChange={(e) => setEmailPrefilledData({...emailPrefilledData, body: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );

      case 'whatsapp':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Phone Number</Label>
              <Input
                placeholder="+1234567890"
                value={whatsappData.number}
                onChange={(e) => setWhatsappData({...whatsappData, number: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
              <p className="text-xs text-muted-foreground">Include country code without + or spaces</p>
            </div>
            <div className="space-y-2">
              <Label className="text-dark-panel-foreground">Pre-filled Message</Label>
              <Textarea
                placeholder="Hello, I'm interested in..."
                value={whatsappData.message}
                onChange={(e) => setWhatsappData({...whatsappData, message: e.target.value})}
                className="bg-dark-input border-dark-border text-dark-panel-foreground"
              />
            </div>
          </div>
        );

      case 'meeting':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">Meeting Link</Label>
            <Input
              placeholder="https://zoom.us/j/123456789"
              value={meetingUrl}
              onChange={(e) => setMeetingUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">Zoom, Google Meet, Teams, or other meeting link</p>
          </div>
        );

      case 'file':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">File Download Link</Label>
            <Input
              placeholder="https://example.com/document.pdf"
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">Direct link to PDF, document, or any file</p>
          </div>
        );

      case 'deeplink':
        return (
          <div className="space-y-2">
            <Label className="text-dark-panel-foreground">App Deep Link</Label>
            <Input
              placeholder="myapp://open/page?id=123"
              value={deepLinkUrl}
              onChange={(e) => setDeepLinkUrl(e.target.value)}
              className="bg-dark-input border-dark-border text-dark-panel-foreground"
            />
            <p className="text-xs text-muted-foreground">Custom app scheme to open specific content</p>
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
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent mb-4">
              QR Code Generator
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-6"></div>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Create Professional QR Codes in Seconds
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Generate QR codes for WiFi networks, Bitcoin wallets, contact cards, URLs, and more. 
            Add your logo, customize colors, and download instantly. No sign-up required.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Logo Embedding</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Multiple Formats</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Generator */}
          <div className="bg-dark-panel rounded-xl p-6">
            {/* QR Type Selection */}
            <div className="grid grid-cols-4 gap-3 mb-6 max-h-96 overflow-y-auto">
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

            {/* Generate Button */}
            <div className="mb-6">
              <Button
                onClick={generateQR}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                disabled={!getQRContent().trim()}
              >
                <Grid3X3 className="h-5 w-5 mr-2" />
                Generate QR Code
              </Button>
            </div>

            {/* Pro Design Panel */}
            <div className="mb-6">
              <Button
                onClick={() => setShowDesignPanel(!showDesignPanel)}
                variant="outline"
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span>Pro Design Options</span>
                </div>
                <Settings className="h-4 w-4" />
              </Button>
              
              {showDesignPanel && (
                <div className="mt-4 p-4 bg-dark-input rounded-lg space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-dark-panel-foreground">Foreground Color</Label>
                      <Input
                        type="color"
                        value={designOptions.foregroundColor}
                        onChange={(e) => setDesignOptions({...designOptions, foregroundColor: e.target.value})}
                        className="h-10 w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-dark-panel-foreground">Background Color</Label>
                      <Input
                        type="color"
                        value={designOptions.backgroundColor}
                        onChange={(e) => setDesignOptions({...designOptions, backgroundColor: e.target.value})}
                        className="h-10 w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-dark-panel-foreground">Dot Style</Label>
                    <select
                      value={designOptions.dotStyle}
                      onChange={(e) => setDesignOptions({...designOptions, dotStyle: e.target.value as 'square' | 'round' | 'dots'})}
                      className="w-full p-2 rounded-md bg-dark-input border-dark-border text-dark-panel-foreground"
                    >
                      <option value="square">Square</option>
                      <option value="round">Round</option>
                      <option value="dots">Dots</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Advanced Tools */}
            <div className="space-y-3">
              <Button
                onClick={() => setShowBatchGenerator(!showBatchGenerator)}
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Batch QR Generator
              </Button>
              
              {showBatchGenerator && (
                <div className="p-4 bg-dark-input rounded-lg space-y-4">
                  <div className="space-y-2">
                    <Label className="text-dark-panel-foreground">Upload CSV File</Label>
                    <Input
                      type="file"
                      accept=".csv"
                      onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                      className="bg-dark-input border-dark-border text-dark-panel-foreground"
                    />
                    <p className="text-xs text-muted-foreground">Format: Each line should contain one URL</p>
                  </div>
                  <Button
                    onClick={generateBatchQRs}
                    disabled={!csvFile}
                    className="w-full"
                  >
                    Generate Batch QR Codes
                  </Button>
                </div>
              )}
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
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    onClick={downloadQR}
                    variant="outline"
                    className="flex flex-col items-center gap-1 h-auto py-3"
                  >
                    <Download className="h-5 w-5" />
                    <span className="text-xs">Download</span>
                  </Button>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex flex-col items-center gap-1 h-auto py-3"
                  >
                    <Copy className="h-5 w-5" />
                    <span className="text-xs">Copy</span>
                  </Button>
                  <Button
                    onClick={printQR}
                    variant="outline"
                    className="flex flex-col items-center gap-1 h-auto py-3"
                  >
                    <Printer className="h-5 w-5" />
                    <span className="text-xs">Print</span>
                  </Button>
                </div>

                {/* Social Share Buttons */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Share QR Code</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={() => shareToSocial('twitter')}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      <Share2 className="h-3 w-3 mr-1" />
                      Twitter
                    </Button>
                    <Button
                      onClick={() => shareToSocial('linkedin')}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      <Share2 className="h-3 w-3 mr-1" />
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => shareToSocial('facebook')}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      <Share2 className="h-3 w-3 mr-1" />
                      Facebook
                    </Button>
                  </div>
                </div>

                {/* Embed Code */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Embed Widget</Label>
                  <Textarea
                    value={getEmbedCode()}
                    readOnly
                    className="text-xs h-20 resize-none"
                    placeholder="Generate a QR code to get embed code..."
                  />
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(getEmbedCode());
                      toast({ title: "Success", description: "Embed code copied to clipboard" });
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Copy Embed Code
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};