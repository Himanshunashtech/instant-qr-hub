import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
          <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using QRJI, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              QRJI provides free QR code generation services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>QR code generation for various content types</li>
              <li>QR code scanning and history management</li>
              <li>Custom styling and design options</li>
              <li>Batch generation capabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>Users agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service only for lawful purposes</li>
              <li>Not generate QR codes for malicious, harmful, or illegal content</li>
              <li>Not attempt to circumvent or interfere with the service</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Content</h2>
            <p>You may not create QR codes containing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Malicious links or malware</li>
              <li>Content that violates copyright or trademark laws</li>
              <li>Spam, phishing, or fraudulent content</li>
              <li>Content that is illegal, harmful, or offensive</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
            <p>
              While we strive to maintain service availability, we do not guarantee uninterrupted access. 
              The service is provided "as is" without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              QRJI shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p>
              The QR codes you generate belong to you. The QRJI service, design, and software remain our intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service constitutes 
              acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at support@qrji.com
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};