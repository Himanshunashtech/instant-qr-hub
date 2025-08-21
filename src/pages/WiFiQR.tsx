import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Shield, Smartphone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const WiFiQR = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/10 rounded-2xl">
                <Wifi className="h-12 w-12 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              WiFi QR Code Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create WiFi QR codes instantly. Share your network credentials securely without revealing passwords. 
              Perfect for businesses, events, and home use.
            </p>
            <Link to="/">
              <Button size="lg" className="text-lg px-8 py-3">
                Generate WiFi QR Code Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How to Generate a WiFi QR Code
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Enter Network Name</h3>
              <p className="text-muted-foreground text-sm">Input your WiFi network name (SSID) exactly as it appears.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Add Password</h3>
              <p className="text-muted-foreground text-sm">Enter your WiFi password and select the security type (WPA/WEP).</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Generate QR Code</h3>
              <p className="text-muted-foreground text-sm">Click generate to create your WiFi QR code instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Share & Connect</h3>
              <p className="text-muted-foreground text-sm">Share the QR code for instant WiFi connection without revealing passwords.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Benefits of WiFi QR Codes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Enhanced Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share WiFi access without revealing your password. Guests can connect instantly while your network remains secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Better Guest Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eliminate the hassle of typing complex passwords. Guests simply scan and connect automatically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-purple-500" />
                  Universal Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Works with all modern smartphones and devices. No special apps required - just scan with the camera.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Perfect Use Cases for WiFi QR Codes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Restaurants & Cafes</h3>
              <p className="text-sm text-muted-foreground">Place QR codes on tables for easy customer WiFi access</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Hotels & Airbnb</h3>
              <p className="text-sm text-muted-foreground">Provide guests with instant WiFi without sharing passwords</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Events & Conferences</h3>
              <p className="text-sm text-muted-foreground">Share event WiFi quickly with all attendees</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Home & Office</h3>
              <p className="text-sm text-muted-foreground">Easy WiFi sharing for visitors and new employees</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Everything You Need to Know About WiFi QR Codes
            </h2>
            <p className="text-muted-foreground mb-4">
              WiFi QR codes are revolutionizing how we share network access. Instead of manually typing complex passwords, 
              users can simply scan a QR code and connect instantly. This technology is particularly valuable for businesses 
              that regularly host guests, events that need to provide WiFi access to many attendees, and any situation where 
              you want to share WiFi without compromising security.
            </p>
            <p className="text-muted-foreground mb-4">
              When you create a WiFi QR code with qrji, the generated code contains your network name (SSID), password, 
              and security type in a standardized format that all modern devices can understand. The format follows the 
              WiFi Alliance standards, ensuring compatibility across iOS, Android, and other platforms.
            </p>
            <p className="text-muted-foreground mb-4">
              For businesses, WiFi QR codes offer numerous advantages. They improve customer experience by eliminating 
              the friction of asking staff for passwords. They enhance security by avoiding the need to verbally share 
              or display passwords publicly. They also reduce support requests related to WiFi connectivity issues.
            </p>
            <p className="text-muted-foreground">
              Our WiFi QR code generator supports all major security protocols including WPA, WPA2, WPA3, and WEP, 
              though we recommend using WPA2 or WPA3 for optimal security. The generated QR codes can be printed, 
              displayed digitally, or shared in any format you prefer.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Create Your WiFi QR Code?
          </h2>
          <p className="text-muted-foreground mb-8">
            Generate professional WiFi QR codes in seconds. Free, secure, and no registration required.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Creating WiFi QR Codes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};