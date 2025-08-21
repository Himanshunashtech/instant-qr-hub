import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Wifi, Bitcoin, Youtube, Link, Smartphone, MessageCircle } from 'lucide-react';

export const ContentSection = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Free Professional QR Code Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            qrji is a free QR code generator that lets you create QR codes for WiFi, Bitcoin, WhatsApp, YouTube, Events, Payments, and more. 
            Customize your QR codes with logos, colors, and download in high resolution. Generate unlimited QR codes instantly without registration.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Instant Generation</h3>
              <p className="text-muted-foreground">Create professional QR codes in seconds with our advanced generator technology.</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Multiple Formats</h3>
              <p className="text-muted-foreground">Support for 20+ QR code types including URLs, WiFi, Bitcoin, WhatsApp, and more.</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">High Quality</h3>
              <p className="text-muted-foreground">Download high-resolution PNG files perfect for printing and digital use.</p>
            </div>
          </div>
        </div>

        {/* How-To Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Create QR Codes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-blue-500" />
                  WiFi QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create a WiFi QR code to share your network credentials instantly.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Enter your WiFi name (SSID)</li>
                  <li>2. Input your WiFi password</li>
                  <li>3. Select encryption type (WPA/WEP)</li>
                  <li>4. Generate and scan to connect instantly</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bitcoin className="h-5 w-5 text-orange-500" />
                  Bitcoin QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Generate Bitcoin QR codes for easy cryptocurrency transactions.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Enter your Bitcoin wallet address</li>
                  <li>2. Verify the address is correct</li>
                  <li>3. Generate the QR code</li>
                  <li>4. Share for easy Bitcoin payments</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-red-500" />
                  YouTube QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create QR codes that link directly to your YouTube videos or channel.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Copy your YouTube video/channel URL</li>
                  <li>2. Paste it into the URL field</li>
                  <li>3. Generate the QR code</li>
                  <li>4. Share to boost video views</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5 text-green-500" />
                  URL QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Convert any website URL into a scannable QR code.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Enter the complete website URL</li>
                  <li>2. Include https:// for secure links</li>
                  <li>3. Click generate to create QR code</li>
                  <li>4. Test by scanning with your phone</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-purple-500" />
                  Contact QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share your contact information instantly with vCard QR codes.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Fill in your contact details</li>
                  <li>2. Include name, phone, email, company</li>
                  <li>3. Generate the vCard QR code</li>
                  <li>4. Others can save your contact instantly</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  WhatsApp QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create QR codes that open WhatsApp chats with pre-filled messages.
                </p>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Enter WhatsApp number with country code</li>
                  <li>2. Add optional pre-filled message</li>
                  <li>3. Generate WhatsApp QR code</li>
                  <li>4. Scan to start conversation instantly</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="what-is-qr">
                <AccordionTrigger className="text-left">What is a QR code?</AccordionTrigger>
                <AccordionContent>
                  A QR (Quick Response) code is a two-dimensional barcode that can store various types of information such as URLs, text, contact details, WiFi credentials, and more. QR codes can be scanned using smartphone cameras or dedicated QR code scanner apps to instantly access the encoded information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="are-qr-codes-safe">
                <AccordionTrigger className="text-left">Are QR codes safe to use?</AccordionTrigger>
                <AccordionContent>
                  QR codes themselves are safe - they're just a way to encode information. However, you should be cautious about scanning QR codes from unknown sources, as they could potentially lead to malicious websites. Always verify the source and check the URL before visiting any website from a QR code. Our qrji generator creates legitimate QR codes and processes everything locally for your privacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-to-scan">
                <AccordionTrigger className="text-left">How do I scan a QR code?</AccordionTrigger>
                <AccordionContent>
                  Most modern smartphones can scan QR codes using their built-in camera app. Simply open your camera app and point it at the QR code - you should see a notification or popup with the encoded information. On older devices, you might need to download a dedicated QR code scanner app from your device's app store.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="qr-code-types">
                <AccordionTrigger className="text-left">What types of QR codes can I create?</AccordionTrigger>
                <AccordionContent>
                  With qrji, you can create QR codes for: URLs/websites, plain text, WiFi networks, contact information (vCard), email addresses, phone numbers, SMS messages, Bitcoin addresses, GPS locations, calendar events, social media profiles, YouTube videos, app store links, and more. We support over 20 different QR code formats.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="free-unlimited">
                <AccordionTrigger className="text-left">Is qrji really free and unlimited?</AccordionTrigger>
                <AccordionContent>
                  Yes! qrji is completely free to use with no registration required. You can generate unlimited QR codes, download them in high resolution, and use all our features without any restrictions. We believe QR code generation should be accessible to everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="print-quality">
                <AccordionTrigger className="text-left">Can I print the QR codes I generate?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! All QR codes generated by qrji are high-resolution PNG files suitable for printing. We recommend maintaining at least a 2cm x 2cm (0.8" x 0.8") minimum size when printing to ensure reliable scanning. For best results, print on white or light-colored backgrounds with good contrast.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data-privacy">
                <AccordionTrigger className="text-left">What happens to my data when I create QR codes?</AccordionTrigger>
                <AccordionContent>
                  Your privacy is our priority. All QR code generation happens locally in your browser - your data never leaves your device or gets sent to our servers. We don't store, track, or have access to any information you enter into our QR code generator. Your data remains completely private and secure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial-use">
                <AccordionTrigger className="text-left">Can I use qrji QR codes for commercial purposes?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can use QR codes generated with qrji for any purpose, including commercial use. There are no restrictions on how you use the QR codes you create. Whether for business cards, marketing materials, product packaging, or any other commercial application, you're free to use our generated QR codes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* SEO Content */}
        <div className="prose max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Professional QR Code Generator for Business and Personal Use</h2>
          <p className="text-muted-foreground mb-4">
            In today's digital world, QR codes have become an essential tool for connecting the physical and digital realms. Whether you're a business owner looking to streamline customer interactions, an event organizer sharing WiFi credentials, or an individual wanting to share your contact information efficiently, qrji provides the perfect solution for all your QR code needs.
          </p>
          <p className="text-muted-foreground mb-4">
            Our advanced QR code generator supports multiple formats and provides enterprise-level features completely free of charge. From basic URL QR codes to complex vCard contact information, Bitcoin wallet addresses, and WiFi network sharing, qrji handles it all with professional quality and reliability.
          </p>
          <p className="text-muted-foreground">
            With over 2 million QR codes generated and users in 150+ countries, qrji has established itself as the trusted choice for individuals and businesses worldwide. Join our community today and experience the power of professional QR code generation.
          </p>
        </div>
      </div>
    </div>
  );
};