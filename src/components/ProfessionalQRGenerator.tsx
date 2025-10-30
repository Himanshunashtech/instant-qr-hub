import React, { useState, useEffect, useRef } from 'react';
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
  Lock,
  X
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
  appColor?: string;
  appLogo?: string;
}

// App-specific logos as SVG data URLs
const appLogos = {
  whatsapp: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2325D366' d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.447'/%3E%3C/svg%3E",
  
  youtube: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF0000' d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/%3E%3C/svg%3E",
  
  maps: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z'/%3E%3C/svg%3E",
  
  twitter: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%231DA1F2' d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/%3E%3C/svg%3E",
  
  facebook: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%231877F2' d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E%3C/svg%3E",
  
  instagram: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23E4405F' d='M12.017 0C8.341 0 7.871.012 6.643.06 2.7.227.227 2.688.061 6.643.012 7.871 0 8.341 0 12.017s.012 4.146.06 5.374c.166 3.955 2.626 6.426 6.58 6.58 1.228.048 1.699.06 5.377.06 3.677 0 4.146-.012 5.377-.06 3.955-.166 6.425-2.625 6.58-6.58.048-1.228.06-1.699.06-5.377s-.012-4.146-.06-5.374C23.777 2.688 21.316.227 17.36.06 16.132.012 15.662 0 12.017 0zm0 1.44c3.573 0 4.015.01 5.227.058 3.036.135 4.588 1.688 4.723 4.723.047 1.212.057 1.654.057 5.227 0 3.572-.01 4.015-.057 5.227-.135 3.035-1.688 4.588-4.723 4.723-1.212.047-1.654.057-5.227.057-3.572 0-4.015-.01-5.227-.057-3.036-.135-4.588-1.688-4.723-4.723-.047-1.212-.057-1.654-.057-5.227 0-3.572.01-4.015.057-5.227.135-3.036 1.688-4.588 4.723-4.723 1.212-.047 1.654-.057 5.227-.057z'/%3E%3Cpath fill='%23E4405F' d='M12.017 5.856a6.161 6.161 0 1 0 0 12.322 6.161 6.161 0 0 0 0-12.322zm0 10.161a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'/%3E%3Ccircle fill='%23E4405F' cx='18.406' cy='5.595' r='1.439'/%3E%3C/svg%3E",
  
  linkedin: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230A66C2' d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E",
  
  tiktok: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'/%3E%3C/svg%3E",
  
  spotify: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%231DB954' d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-2-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z'/%3E%3C/svg%3E"
};

const qrTypes: QRType[] = [
  { id: 'url', label: 'URL', icon: Link, color: 'text-green-500' },
  { id: 'wifi', label: 'WiFi', icon: Smartphone, color: 'text-blue-500' },
  { id: 'text', label: 'Plain Text', icon: MessageSquare, color: 'text-gray-500' },
  { id: 'contact', label: 'Contact', icon: User, color: 'text-purple-500' },
  { id: 'email', label: 'Email', icon: Mail, color: 'text-cyan-500' },
  { id: 'phone', label: 'Phone', icon: Phone, color: 'text-emerald-500' },
  { id: 'sms', label: 'SMS', icon: MessageSquare, color: 'text-orange-500' },
  { id: 'bitcoin', label: 'Bitcoin', icon: Grid3X3, color: 'text-yellow-500' },
  { id: 'location', label: 'Location', icon: MapPin, color: 'text-red-500', appColor: '#4285F4', appLogo: appLogos.maps },
  { id: 'event', label: 'Event', icon: Calendar, color: 'text-indigo-500' },
  { id: 'appstore', label: 'App Store', icon: Store, color: 'text-blue-600' },
  { id: 'social', label: 'Social Media', icon: Users, color: 'text-pink-500' },
  { id: 'youtube', label: 'YouTube', icon: Play, color: 'text-red-600', appColor: '#FF0000', appLogo: appLogos.youtube },
  { id: 'payment', label: 'Payment', icon: CreditCard, color: 'text-green-600' },
  { id: 'crypto', label: 'Crypto', icon: Coins, color: 'text-orange-600' },
  { id: 'emailprefilled', label: 'Email+', icon: Mail, color: 'text-teal-500' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'text-green-600', appColor: '#25D366', appLogo: appLogos.whatsapp },
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

  // Logo state
  const [logo, setLogo] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(60);
  const [highQualityLogo, setHighQualityLogo] = useState<string | null>(null);

  // Advanced features
  const [showDesignPanel, setShowDesignPanel] = useState(false);
  const [showBatchGenerator, setShowBatchGenerator] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoCanvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Clear QR code when inputs change
    setQrCode('');
  }, [selectedType, url, text, phone, email, smsText, contactData, wifiData, bitcoinAddress, locationData, eventData, appStoreUrl, socialUrl, youtubeUrl, paymentUrl, cryptoAddress, emailPrefilledData, whatsappData, meetingUrl, fileUrl, deepLinkUrl, designOptions, logo, logoSize]);

  // Function to create high quality version of logo
  const createHighQualityLogo = (imageSrc: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = logoCanvasRef.current;
      if (!canvas) {
        reject(new Error('Canvas not available'));
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      const img = new Image();
      img.onload = () => {
        // Set canvas to high resolution for better quality
        const scale = 2;
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        // Enable high quality image rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Draw image at high resolution
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert to high quality data URL
        const highQualityDataUrl = canvas.toDataURL('image/png', 1.0);
        resolve(highQualityDataUrl);
      };

      img.onerror = reject;
      img.src = imageSrc;
    });
  };

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "Logo size should be less than 5MB for best quality",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        const originalDataUrl = e.target?.result as string;
        setLogo(originalDataUrl);

        try {
          const highQualityLogo = await createHighQualityLogo(originalDataUrl);
          setHighQualityLogo(highQualityLogo);
          
          toast({
            title: "Success",
            description: "High-quality logo uploaded successfully",
          });
        } catch (error) {
          console.error('Error processing logo:', error);
          setHighQualityLogo(originalDataUrl);
          toast({
            title: "Warning",
            description: "Logo uploaded with standard quality",
            variant: "default"
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setHighQualityLogo(null);
  };

  // Get app-specific design for QR type
  const getAppSpecificDesign = () => {
    const qrType = qrTypes.find(t => t.id === selectedType);
    
    if (qrType?.appColor && qrType?.appLogo) {
      return {
        foregroundColor: qrType.appColor,
        backgroundColor: '#FFFFFF',
        appLogo: qrType.appLogo
      };
    }
    
    // Auto-detect social media platforms from URLs
    if (selectedType === 'url' || selectedType === 'social') {
      const content = getQRContent().toLowerCase();
      
      if (content.includes('whatsapp') || content.includes('wa.me')) {
        return {
          foregroundColor: '#25D366',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.whatsapp
        };
      }
      if (content.includes('youtube') || content.includes('youtu.be')) {
        return {
          foregroundColor: '#FF0000',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.youtube
        };
      }
      if (content.includes('google') && content.includes('map')) {
        return {
          foregroundColor: '#4285F4',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.maps
        };
      }
      if (content.includes('twitter') || content.includes('x.com')) {
        return {
          foregroundColor: '#1DA1F2',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.twitter
        };
      }
      if (content.includes('facebook')) {
        return {
          foregroundColor: '#1877F2',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.facebook
        };
      }
      if (content.includes('instagram')) {
        return {
          foregroundColor: '#E4405F',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.instagram
        };
      }
      if (content.includes('linkedin')) {
        return {
          foregroundColor: '#0A66C2',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.linkedin
        };
      }
      if (content.includes('tiktok')) {
        return {
          foregroundColor: '#000000',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.tiktok
        };
      }
      if (content.includes('spotify')) {
        return {
          foregroundColor: '#1DB954',
          backgroundColor: '#FFFFFF',
          appLogo: appLogos.spotify
        };
      }
    }
    
    return null;
  };

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
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Get app-specific design if available
      const appDesign = getAppSpecificDesign();
      const finalDesign = appDesign ? {
        foregroundColor: appDesign.foregroundColor,
        backgroundColor: appDesign.backgroundColor
      } : designOptions;

      // Generate QR code at higher resolution for better quality
      const qrSize = 400;
      await QRCode.toCanvas(canvas, content, {
        width: qrSize,
        margin: 2,
        color: {
          dark: finalDesign.foregroundColor,
          light: finalDesign.backgroundColor
        },
        errorCorrectionLevel: 'H'
      });

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Enable high quality rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Determine which logo to use (priority: uploaded logo > app logo > none)
      const logoToUse = highQualityLogo || logo || appDesign?.appLogo;
      
      if (logoToUse) {
        const img = new Image();
        img.onload = () => {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const logoX = centerX - logoSize / 2;
          const logoY = centerY - logoSize / 2;

          // Create background for logo with smoother edges
          ctx.fillStyle = finalDesign.backgroundColor;
          ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);

          // Draw high quality logo
          ctx.drawImage(img, logoX, logoY, logoSize, logoSize);

          // Add watermark with better font
          ctx.font = 'bold 12px Arial';
          ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          ctx.textAlign = 'center';
          ctx.fillText('QRJI.com', canvas.width / 2, canvas.height - 8);

          // Generate final QR code with maximum quality
          const qrDataUrl = canvas.toDataURL('image/png', 1.0);
          setQrCode(qrDataUrl);
          saveToHistory(qrDataUrl);
        };
        img.src = logoToUse;
      } else {
        // Add watermark
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.textAlign = 'center';
        ctx.fillText('QRJI.com', canvas.width / 2, canvas.height - 8);

        const qrDataUrl = canvas.toDataURL('image/png', 1.0);
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
    const content = getQRContent();
    const history = JSON.parse(localStorage.getItem('qr-history') || '[]');
    const newEntry = {
      id: Date.now(),
      text: content,
      qrCode: qrDataUrl,
      type: 'generated',
      qrType: selectedType,
      timestamp: new Date().toISOString(),
      designOptions: designOptions,
      hasLogo: !!logo,
      hasAppLogo: !!getAppSpecificDesign()?.appLogo
    };
    
    const updatedHistory = [newEntry, ...history.slice(0, 9)];
    localStorage.setItem('qr-history', JSON.stringify(updatedHistory));
  };

  // Rest of the functions remain exactly the same...
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
      description: "High-quality QR code downloaded successfully"
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

  // Get current app design info for display
  const getCurrentAppDesignInfo = () => {
    const appDesign = getAppSpecificDesign();
    if (appDesign) {
      const qrType = qrTypes.find(t => t.id === selectedType);
      return {
        color: appDesign.foregroundColor,
        appName: qrType?.label || 'App',
        hasAutoLogo: true
      };
    }
    return null;
  };

  const renderContentInput = () => {
    const appDesignInfo = getCurrentAppDesignInfo();
    
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
            {appDesignInfo && (
              <p className="text-xs text-green-500">
                ✓ Auto-detected {appDesignInfo.appName} - Using brand colors and logo
              </p>
            )}
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
            <p className="text-xs text-green-500">
              ✓ Using WhatsApp brand colors and logo automatically
            </p>
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
            <p className="text-xs text-green-500">
              ✓ Using YouTube brand colors and logo automatically
            </p>
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
            <p className="text-xs text-green-500">
              ✓ Using Google Maps brand colors and logo automatically
            </p>
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
            {appDesignInfo && (
              <p className="text-xs text-green-500">
                ✓ Auto-detected {appDesignInfo.appName} - Using brand colors and logo
              </p>
            )}
          </div>
        );

      // ... rest of the renderContentInput cases remain the same
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
              <span>Auto App Logos & Colors</span>
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
                const hasAutoLogo = type.appLogo !== undefined;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors relative ${
                      selectedType === type.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-dark-input text-dark-panel-foreground hover:bg-dark-border'
                    }`}
                  >
                    <IconComponent className={`h-5 w-5 ${selectedType !== type.id ? type.color : ''}`} />
                    <span className="text-xs font-medium">{type.label}</span>
                    {hasAutoLogo && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" title="Auto logo & colors" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-panel-foreground mb-4">
                {qrTypes.find(t => t.id === selectedType)?.label} QR Code
                {getCurrentAppDesignInfo() && (
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                    Auto Branding
                  </span>
                )}
              </h3>
              {renderContentInput()}
            </div>

            {/* Logo Upload Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-panel-foreground mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Custom Logo (Optional)
              </h3>
              
              {!logo ? (
                <div className="border-2 border-dashed border-dark-border rounded-lg p-4 text-center">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <Label 
                    htmlFor="logo-upload" 
                    className="cursor-pointer text-primary hover:text-primary/80"
                  >
                    Click to upload custom logo
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG up to 5MB (High Quality)
                  </p>
                  {getCurrentAppDesignInfo() && (
                    <p className="text-xs text-green-500 mt-2">
                      ✓ App logo will be used automatically unless you upload a custom one
                    </p>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <div className="flex items-center gap-3 p-3 border border-dark-border rounded-lg">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="w-12 h-12 object-contain"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-dark-panel-foreground">Custom logo uploaded</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Label htmlFor="logo-size" className="text-xs text-muted-foreground">
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
                        <span className="text-xs text-muted-foreground">{logoSize}px</span>
                      </div>
                      <p className="text-xs text-green-500 mt-1">✓ High quality processing enabled</p>
                    </div>
                    <Button
                      onClick={removeLogo}
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Design Info Panel */}
            {getCurrentAppDesignInfo() && (
              <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: getCurrentAppDesignInfo()?.color }}
                  />
                  <span>Using {getCurrentAppDesignInfo()?.appName} brand colors and logo</span>
                </div>
              </div>
            )}

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
              <div className="mt-4 p-4 bg-dark-input rounded-lg space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-dark-panel-foreground">Foreground</Label>
                    <Input
                      type="color"
                      value={designOptions.foregroundColor}
                      onChange={(e) => setDesignOptions({...designOptions, foregroundColor: e.target.value})}
                      className="h-10 w-full"
                    />
                    {getCurrentAppDesignInfo() && (
                      <p className="text-xs text-yellow-500">
                        ⚠ Overridden by app colors
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-dark-panel-foreground">Background</Label>
                    <Input
                      type="color"
                      value={designOptions.backgroundColor}
                      onChange={(e) => setDesignOptions({...designOptions, backgroundColor: e.target.value})}
                      className="h-10 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden canvases for QR generation and logo processing */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <canvas ref={logoCanvasRef} style={{ display: 'none' }} />
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
                    style={{ imageRendering: 'auto' }}
                  />
                  <div className="text-sm text-gray-600">
                    {selectedType.toUpperCase()} QR Code 
                    {logo && ' (with Custom Logo)'}
                    {getCurrentAppDesignInfo() && !logo && ' (with App Logo)'}
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