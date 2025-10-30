import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Shield, Info, Zap, Globe, FileText, Users, Clock, MapPin } from 'lucide-react';

export const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Legal Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Important legal information about the use of QRJI services, limitations of liability, 
              and terms that govern your use of our QR code generation platform.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> This disclaimer is part of our Terms of Service and governs your use of QRJI. 
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </AlertDescription>
        </Alert>

        {/* Company Information */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Company Information
            </CardTitle>
            <CardDescription>
              SCS Sharma Consultant Services - Registered Indian Company
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Registered Company</h4>
                <p className="text-muted-foreground">
                  SCS Sharma Consultant Services<br />
                  (Registered under Indian Companies Act)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operating Brand</h4>
                <p className="text-muted-foreground">
                  QRJI - QR Code Generation Platform<br />
                  A product of SCS Sharma Consultant Services
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Disclaimer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-6 w-6" />
              General Disclaimer
            </CardTitle>
            <CardDescription>
              General terms and conditions regarding the use of QRJI services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none space-y-4">
              <h3>Service Availability and Reliability</h3>
              <p>
                QRJI (operated by SCS Sharma Consultant Services) provides QR code generation services on an "as is" and "as available" basis. While we strive 
                to maintain high service availability and reliability, we cannot guarantee uninterrupted or error-free 
                operation of our services. Service interruptions may occur due to maintenance, technical difficulties, 
                third-party service outages, or circumstances beyond our control.
              </p>

              <h3>Accuracy of Information</h3>
              <p>
                We make reasonable efforts to ensure the accuracy and reliability of information provided through our 
                services. However, we do not warrant the completeness, accuracy, or timeliness of any information, 
                including QR code generation results, documentation, or support materials. Users are responsible for 
                verifying the accuracy and suitability of generated QR codes for their intended purposes.
              </p>

              <h3>Third-Party Content and Services</h3>
              <p>
                Our platform may integrate with or reference third-party services, websites, or content. We do not 
                endorse, control, or assume responsibility for any third-party content, services, or websites. Links 
                to external sites are provided for convenience only, and we do not guarantee their availability, 
                accuracy, or security.
              </p>

              <h3>User-Generated Content</h3>
              <p>
                Users are solely responsible for the content they input into our QR code generation tools. We do not 
                monitor, verify, or endorse user-generated content and disclaim any responsibility for its accuracy, 
                legality, or appropriateness. Users must ensure their content complies with applicable Indian laws and 
                regulations.
              </p>

              <h3>Technical Limitations</h3>
              <p>
                QR code technology has inherent limitations regarding data capacity, scanning reliability, and 
                compatibility across different devices and applications. We cannot guarantee that generated QR codes 
                will be readable by all QR code scanners or work in all environments. Factors such as printing quality, 
                display resolution, lighting conditions, and scanning device capabilities may affect QR code functionality.
              </p>

              <h3>Business Use Considerations</h3>
              <p>
                While our services are suitable for both personal and business use, users deploying QR codes in 
                commercial environments should conduct appropriate testing and validation before implementation. 
                We recommend testing QR codes with multiple scanning devices and applications to ensure compatibility 
                with your target audience's devices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Limitation of Liability
            </CardTitle>
            <CardDescription>
              Important limitations on our liability for use of QRJI services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none space-y-4">
              <h3>Disclaimer of Warranties</h3>
              <p>
                To the fullest extent permitted by applicable Indian law, SCS Sharma Consultant Services (operating as QRJI) disclaims all warranties, express or implied, 
                including but not limited to warranties of merchantability, fitness for a particular purpose, 
                non-infringement, and those arising from course of dealing or usage of trade. We do not warrant that 
                our services will meet your requirements, be uninterrupted, timely, secure, or error-free.
              </p>

              <h3>Limitation of Damages</h3>
              <p>
                In no event shall SCS Sharma Consultant Services, its officers, directors, employees, agents, or affiliates be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not limited to loss 
                of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services, 
                even if we have been advised of the possibility of such damages.
              </p>

              <h3>Maximum Liability</h3>
              <p>
                Our total liability to you for any claims arising out of or relating to your use of our services shall 
                not exceed the amount you paid to us for the services in the twelve (12) months preceding the claim. 
                For free services, our maximum liability shall be limited to one thousand Indian Rupees (₹1,000).
              </p>

              <h3>Essential Purpose</h3>
              <p>
                The limitations of liability set forth in this disclaimer are fundamental elements of the basis of the 
                bargain between SCS Sharma Consultant Services (QRJI) and you. Our services would not be provided without such limitations. These 
                limitations shall apply even if any limited remedy fails of its essential purpose.
              </p>

              <h3>Jurisdictional Variations</h3>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of certain warranties or damages. In such 
                jurisdictions, our liability and the liability of our affiliates shall be limited to the greatest 
                extent permitted by applicable Indian law. The above limitations may not apply to you if prohibited by local law.
              </p>

              <h3>Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless SCS Sharma Consultant Services (QRJI) and its officers, directors, employees, agents, 
                and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, 
                and expenses (including attorney's fees) arising from your use of our services, violation of these terms, 
                or infringement of any third-party rights.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Service-Specific Disclaimers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                QR Code Functionality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <h4 className="font-semibold">Scanning Reliability</h4>
                <p className="text-muted-foreground">
                  QR code scanning success depends on various factors including print quality, size, contrast, 
                  lighting conditions, and scanner capabilities. We cannot guarantee universal scanning compatibility.
                </p>

                <h4 className="font-semibold">Data Integrity</h4>
                <p className="text-muted-foreground">
                  While we implement error correction in QR codes, physical damage, poor printing, or environmental 
                  factors may affect data integrity. Users should test QR codes before deployment.
                </p>

                <h4 className="font-semibold">Content Validation</h4>
                <p className="text-muted-foreground">
                  We do not validate the content encoded in QR codes. Users are responsible for ensuring URLs are 
                  accessible, contact information is accurate, and all content is appropriate and legal under Indian law.
                </p>

                <h4 className="font-semibold">Format Compatibility</h4>
                <p className="text-muted-foreground">
                  Different QR code readers may interpret data formats differently. Specialized formats (WiFi, vCard, etc.) 
                  may not be supported by all scanning applications commonly used in India.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Internet and External Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <h4 className="font-semibold">URL Accessibility</h4>
                <p className="text-muted-foreground">
                  We cannot guarantee the continued availability or accessibility of URLs encoded in QR codes. 
                  Website owners may change, move, or remove content without notice.
                </p>

                <h4 className="font-semibold">Third-Party Services</h4>
                <p className="text-muted-foreground">
                  QR codes linking to third-party services (UPI, social media, payment platforms, etc.) depend on those 
                  services' availability and terms. We are not responsible for third-party service interruptions.
                </p>

                <h4 className="font-semibold">Security Considerations</h4>
                <p className="text-muted-foreground">
                  QR codes can link to potentially malicious content. Users should exercise caution when scanning 
                  unknown QR codes and implement appropriate security measures as per Indian cybersecurity guidelines.
                </p>

                <h4 className="font-semibold">Network Requirements</h4>
                <p className="text-muted-foreground">
                  Many QR code functions require internet connectivity. We cannot guarantee network availability 
                  or performance when QR codes are scanned in various locations across India.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legal and Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Legal and Compliance Considerations
            </CardTitle>
            <CardDescription>
              Important legal considerations for users of QRJI services in India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none space-y-4">
              <h3>Compliance with Indian Laws</h3>
              <p>
                Users are solely responsible for ensuring their use of QR codes complies with all applicable Indian laws, 
                regulations, and industry standards. This includes but is not limited to the Information Technology Act, 2000, 
                Consumer Protection Act, 2019, data protection regulations, and RBI guidelines for financial transactions.
              </p>

              <h3>Intellectual Property</h3>
              <p>
                Users must ensure they have the right to use any content, logos, images, or other materials included 
                in or linked from their QR codes under Indian copyright and trademark laws. We do not verify intellectual 
                property rights and disclaim responsibility for any infringement claims arising from user-generated content.
              </p>

              <h3>Privacy and Data Protection</h3>
              <p>
                When QR codes collect or process personal information, users must comply with applicable Indian privacy 
                laws including the Digital Personal Data Protection Act, 2023 and IT Act provisions. Users are responsible 
                for providing appropriate privacy notices and obtaining necessary consents as per Indian legal requirements.
              </p>

              <h3>Financial Transactions</h3>
              <p>
                For QR codes involving financial transactions (UPI payments, banking, etc.), users must comply with 
                RBI guidelines, payment system regulations, and ensure proper security measures are implemented to 
                protect sensitive financial information.
              </p>

              <h3>Commercial Use Restrictions</h3>
              <p>
                Users engaging in commercial activities through QR codes must comply with relevant Indian business 
                regulations, GST requirements, licensing obligations, and consumer protection laws. This includes 
                proper disclosure of commercial relationships, pricing information, and terms of sale.
              </p>

              <h3>Content Restrictions</h3>
              <p>
                Users may not use our services to create QR codes that link to or contain illegal content under Indian law, 
                including but not limited to defamatory content, hate speech, content violating Indian penal code provisions, 
                or material prohibited under the IT Act and related rules.
              </p>

              <h3>Accessibility Requirements</h3>
              <p>
                Users deploying QR codes in public spaces or for essential services in India should consider accessibility 
                requirements and provide alternative access methods to ensure compliance with rights of persons with disabilities.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              User Responsibilities
            </CardTitle>
            <CardDescription>
              What we expect from users of QRJI services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none space-y-4">
              <h3>Proper Use</h3>
              <p>
                Users must use our services in accordance with their intended purpose and applicable terms of service. 
                This includes using QR codes for legitimate purposes, respecting usage limits, and not attempting to 
                circumvent security measures or service restrictions.
              </p>

              <h3>Content Responsibility</h3>
              <p>
                Users are solely responsible for all content they input into our QR code generation tools, including 
                URLs, text, contact information, and any linked content. Users must ensure their content is accurate, 
                appropriate, legal under Indian law, and does not infringe on third-party rights.
              </p>

              <h3>Security Practices</h3>
              <p>
                Users should implement appropriate security measures when using QR codes, especially in commercial 
                or sensitive applications. This includes regularly testing QR codes, monitoring linked content for 
                security issues, and implementing proper access controls for administrative functions.
              </p>

              <h3>Account Security</h3>
              <p>
                Users are responsible for maintaining the security of their accounts, including choosing strong 
                passwords, protecting account credentials, and promptly notifying us of any suspected unauthorized 
                access or security breaches.
              </p>

              <h3>Monitoring and Maintenance</h3>
              <p>
                For ongoing QR code deployments, users should regularly monitor the functionality and accessibility 
                of their QR codes and linked content. This includes testing scanning functionality, verifying link 
                destinations, and updating content as necessary.
              </p>

              <h3>Feedback and Reporting</h3>
              <p>
                Users should report any service issues, security vulnerabilities, or inappropriate content to our 
                support team promptly. We appreciate user feedback to help improve our services and maintain a 
                safe environment for all users.
              </p>

              <h3>Data Backup</h3>
              <p>
                Users should maintain appropriate backups of important QR code content and related data. While we 
                implement data protection measures, users are ultimately responsible for ensuring they have copies 
                of critical information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates and Changes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Updates and Changes
            </CardTitle>
            <CardDescription>
              How we handle updates to this disclaimer and our services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none space-y-4">
              <h3>Disclaimer Updates</h3>
              <p>
                We reserve the right to update this disclaimer at any time to reflect changes in our services, 
                legal requirements under Indian law, or business practices. Material changes will be communicated 
                to users through appropriate channels, including email notifications for registered users and 
                prominent notices on our website.
              </p>

              <h3>Service Modifications</h3>
              <p>
                We may modify, suspend, or discontinue any aspect of our services at any time, with or without notice. 
                While we strive to provide advance notice of significant changes, some modifications may be implemented 
                immediately for security, legal, or operational reasons.
              </p>

              <h3>Feature Updates</h3>
              <p>
                New features and enhancements may be added to our services periodically. These additions may include 
                additional terms or limitations, which will be communicated to users and incorporated into our terms 
                of service and this disclaimer.
              </p>

              <h3>Legacy Support</h3>
              <p>
                We may discontinue support for older features, formats, or integration methods with reasonable notice. 
                Users relying on deprecated functionality should plan for migration to supported alternatives within 
                the specified transition period.
              </p>

              <h3>Continued Use</h3>
              <p>
                Your continued use of our services after any modifications to this disclaimer constitutes acceptance 
                of the updated terms. If you do not agree with any changes, you should discontinue use of our services 
                and contact us to delete your account and associated data.
              </p>

              <h3>Notification Methods</h3>
              <p>
                We will communicate significant changes through multiple channels including in-app notifications, 
                email alerts to registered users, updates to our website, and social media announcements. Users are 
                responsible for staying informed about changes to our terms and policies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Questions About This Disclaimer</CardTitle>
            <CardDescription>
              How to get help or clarification about our legal terms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p>
                If you have questions about this disclaimer, need clarification about any provisions, or want to 
                discuss how these terms apply to your specific use case, please don't hesitate to contact us. 
                Our legal and support teams are available to help you understand your rights and responsibilities 
                when using QRJI services.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">General Inquiries</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For general questions about this disclaimer or our terms of service:
                  </p>
                  <p className="text-sm">
                    Email: legal@scsconsultant.in<br />
                    Response time: 2-3 business days
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Enterprise Legal</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For enterprise customers or complex legal questions:
                  </p>
                  <p className="text-sm">
                    Email: enterprise@scsconsultant.in<br />
                    Response time: 1-2 business days
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Registered Company:</strong> SCS Sharma Consultant Services<br />
                  <strong>Operating Brand:</strong> QRJI<br />
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                  <strong>Effective Date:</strong> {new Date().toLocaleDateString()}<br />
                  <strong>Document Version:</strong> 2.1<br />
                  <strong>Governing Law:</strong> Laws of India, Courts in [Your City]
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};