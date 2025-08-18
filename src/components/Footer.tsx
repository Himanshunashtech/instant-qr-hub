import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

export const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">QRJI</h3>
            <p className="text-muted-foreground text-sm">
              Professional QR code generator with advanced customization options. 
              Create, track, and manage your QR codes with ease.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">QR Generator</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">QR Scanner</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Batch Generation</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Custom Designs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">QR Types</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">URL & Links</li>
              <li className="text-muted-foreground">WiFi Credentials</li>
              <li className="text-muted-foreground">Contact Cards</li>
              <li className="text-muted-foreground">Social Media</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><a href="mailto:support@qrji.com" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              <li><a href="mailto:privacy@qrji.com" className="text-muted-foreground hover:text-foreground">Privacy Questions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 QRJI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              Made with ❤️ for QR code enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};