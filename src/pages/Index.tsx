import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfessionalQRGenerator } from '@/components/ProfessionalQRGenerator';
import { QRScanner } from '@/components/QRScanner';
import { QRHistory } from '@/components/QRHistory';
import { QrCode, Camera, History } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Tabs defaultValue="generate" className="w-full">
        <div className="bg-background border-b border-border px-6 py-2">
          <div className="max-w-7xl mx-auto">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/50 p-1">
              <TabsTrigger 
                value="generate" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <QrCode className="h-4 w-4" />
                Generate
              </TabsTrigger>
              <TabsTrigger 
                value="scan"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Camera className="h-4 w-4" />
                Scan
              </TabsTrigger>
              <TabsTrigger 
                value="history"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <History className="h-4 w-4" />
                History
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="generate" className="mt-0">
          <ProfessionalQRGenerator />
        </TabsContent>

        <TabsContent value="scan" className="mt-0 p-6">
          <div className="max-w-4xl mx-auto">
            <QRScanner />
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-0 p-6">
          <div className="max-w-4xl mx-auto">
            <QRHistory />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;