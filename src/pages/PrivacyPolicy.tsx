import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
          <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              QRJI is committed to protecting your privacy. We collect minimal information necessary to provide our QR code generation services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>QR code content you input (stored locally in your browser)</li>
              <li>Usage analytics to improve our service (anonymized)</li>
              <li>Browser cookies for functionality and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>Your information is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Generate QR codes as requested</li>
              <li>Store your QR code history locally on your device</li>
              <li>Improve our service through anonymized analytics</li>
              <li>Provide customer support when needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <p>
              Your QR code data is stored locally in your browser's localStorage. We do not store your QR code content on our servers. 
              All data transmission is encrypted using HTTPS protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for usage statistics (anonymized)</li>
              <li>Google AdSense for displaying relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies Policy</h2>
            <p>
              We use cookies to enhance your experience. These include functional cookies for preferences and 
              analytics cookies to understand how you use our service. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clear your local QR code history at any time</li>
              <li>Opt out of analytics tracking</li>
              <li>Request information about data collection</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@qrji.com
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};