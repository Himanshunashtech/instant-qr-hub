import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how QRJI collects, uses, and protects your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="prose prose-sm max-w-none space-y-8 p-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction and Scope</h2>
              <p>
                Welcome to QRJI ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our QR code generation services. This policy applies to all users of our platform, whether you're generating QR codes for personal use, business purposes, or any other application.
              </p>
              <p>
                We are committed to protecting your privacy and being transparent about our data practices. This policy covers all aspects of our service, including our website, mobile applications, API services, and any other platforms we may offer. By using our services, you consent to the data practices described in this policy.
              </p>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@qrji.com. We regularly review and update this policy to ensure it remains current with our practices and applicable laws.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">Information You Provide Directly</h3>
              <p>
                When you use QRJI, you may provide us with various types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>QR Code Content:</strong> The data you input to generate QR codes, including URLs, text, contact information, WiFi credentials, and other content types</li>
                <li><strong>Account Information:</strong> If you create an account, we collect your email address, username, and any profile information you choose to provide</li>
                <li><strong>Contact Information:</strong> When you contact our support team, we collect your name, email address, and the content of your communications</li>
                <li><strong>Feedback and Surveys:</strong> Any feedback, reviews, or survey responses you provide to help us improve our services</li>
                <li><strong>Payment Information:</strong> For premium features, we collect billing information through secure third-party payment processors</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Automatically Collected Information</h3>
              <p>
                We automatically collect certain information when you use our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> Information about how you interact with our service, including features used, QR codes generated, and time spent on different pages</li>
                <li><strong>Device Information:</strong> Browser type and version, operating system, screen resolution, and device identifiers</li>
                <li><strong>Log Data:</strong> IP address, access times, pages viewed, and referral sources</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address (country and region level only)</li>
                <li><strong>Performance Data:</strong> Information about service performance, error rates, and response times</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Cookies and Similar Technologies</h3>
              <p>
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic functionality, including session management and security features</li>
                <li><strong>Preference Cookies:</strong> Store your settings and preferences, such as language selection and theme choices</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how our service is used and identify areas for improvement</li>
                <li><strong>Local Storage:</strong> Store your QR code history and preferences locally in your browser</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              
              <h3 className="text-xl font-medium mb-3">Service Provision</h3>
              <p>
                We use your information primarily to provide and improve our QR code generation services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate QR codes based on your input and preferences</li>
                <li>Store your QR code history and settings (locally or in your account)</li>
                <li>Provide customer support and technical assistance</li>
                <li>Process payments for premium features</li>
                <li>Maintain and improve service functionality and performance</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Communication</h3>
              <p>
                We may use your contact information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and support requests</li>
                <li>Send important service notifications and updates</li>
                <li>Provide information about new features and improvements</li>
                <li>Send marketing communications (only with your consent)</li>
                <li>Conduct user research and gather feedback</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Legal and Security Purposes</h3>
              <p>
                We may process your information when necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Protect our rights, property, and the safety of our users</li>
                <li>Prevent fraud, abuse, and security threats</li>
                <li>Enforce our terms of service and other agreements</li>
                <li>Respond to legal requests from authorities</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              
              <h3 className="text-xl font-medium mb-3">Data Storage Practices</h3>
              <p>
                We implement a privacy-first approach to data storage:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Local Storage:</strong> Most QR code content is processed and stored locally in your browser, never leaving your device</li>
                <li><strong>Server Storage:</strong> Only when you explicitly choose to save QR codes to your account or use cloud features</li>
                <li><strong>Temporary Processing:</strong> Data briefly processed on our servers is immediately deleted after generation</li>
                <li><strong>Encrypted Storage:</strong> All server-stored data is encrypted using industry-standard encryption protocols</li>
                <li><strong>Geographic Storage:</strong> Data is stored in secure data centers with appropriate regional compliance</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Security Measures</h3>
              <p>
                We protect your information through comprehensive security measures:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption:</strong> All data transmission uses HTTPS/TLS encryption</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication for our systems</li>
                <li><strong>Monitoring:</strong> Continuous monitoring for security threats and unauthorized access</li>
                <li><strong>Regular Audits:</strong> Regular security assessments and vulnerability testing</li>
                <li><strong>Incident Response:</strong> Comprehensive procedures for handling security incidents</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Data Retention</h3>
              <p>
                We retain information only as long as necessary:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active, plus 30 days after deletion</li>
                <li><strong>QR Code History:</strong> Stored according to your preferences, with options for automatic deletion</li>
                <li><strong>Analytics Data:</strong> Aggregated and anonymized after 12 months</li>
                <li><strong>Support Communications:</strong> Retained for up to 3 years for quality assurance</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
              </ul>
            </section>

            {/* Your Rights and Choices */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              
              <p>
                You have significant control over your personal information and how it's used:
              </p>
              
              <h3 className="text-xl font-medium mb-3">Data Access and Portability</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request a copy of all personal data we hold about you</li>
                <li>Export your QR code history and account data</li>
                <li>Receive information about how your data is processed</li>
                <li>Get details about data sharing with third parties</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Data Correction and Deletion</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update or correct your account information and preferences</li>
                <li>Delete your account and all associated data</li>
                <li>Clear your local QR code history at any time</li>
                <li>Request deletion of specific pieces of information</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Communication Preferences</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opt out of marketing communications at any time</li>
                <li>Choose which types of notifications you receive</li>
                <li>Update your communication preferences in your account settings</li>
                <li>Unsubscribe from emails using the links provided</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Cookie and Tracking Controls</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manage cookie preferences through our cookie settings</li>
                <li>Disable non-essential cookies while maintaining functionality</li>
                <li>Use browser settings to control cookie behavior</li>
                <li>Opt out of analytics tracking while still using our services</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us About Privacy</h2>
              <p>
                If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> privacy@qrji.com</li>
                <li><strong>Response Time:</strong> We respond to privacy inquiries within 2 business days</li>
                <li><strong>Data Protection Officer:</strong> Available for complex privacy matters</li>
                <li><strong>Address:</strong> 123 Tech Avenue, Suite 456, San Francisco, CA 94105</li>
              </ul>
              <p className="mt-4">
                We are committed to resolving privacy concerns promptly and transparently. If you're not satisfied with our response, you have the right to file a complaint with your local data protection authority.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};