import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QRGenerator } from '@/components/QRGenerator';
import { QRScanner } from '@/components/QRScanner';
import { QRHistory } from '@/components/QRHistory';
import { QrCode, Camera, History, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/10 rounded-full">
              <QrCode className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">QR Scanner Pro</h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Generate, scan, and manage QR codes instantly. Fast, secure, and works on any device.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>Camera Scanner</span>
            </div>
            <div className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span>Smart History</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generate" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1">
            <TabsTrigger 
              value="generate" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground"
            >
              <QrCode className="h-4 w-4" />
              Generate
            </TabsTrigger>
            <TabsTrigger 
              value="scan"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-scanner data-[state=active]:text-primary-foreground"
            >
              <Camera className="h-4 w-4" />
              Scan
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-card data-[state=active]:text-foreground"
            >
              <History className="h-4 w-4" />
              History
            </TabsTrigger>
          </TabsList>

          <div className="space-y-6">
            <TabsContent value="generate" className="space-y-6">
              <QRGenerator />
            </TabsContent>

            <TabsContent value="scan" className="space-y-6">
              <QRScanner />
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <QRHistory />
            </TabsContent>
          </div>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for quick QR code generation and scanning
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            No data is stored on our servers. Everything works locally in your browser.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;