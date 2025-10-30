import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, Shield, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch with QRJI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you with any questions, concerns, or feedback about our QR code generation services. 
              Our dedicated support team is committed to providing you with the best possible experience.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond to your inquiry as soon as possible. 
                  We typically respond within 24 hours during business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Inquiry Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-md border border-input bg-background"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Questions</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide detailed information about your inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How do I generate a QR code?</h4>
                      <p className="text-sm text-muted-foreground">
                        Simply select your desired QR code type, enter your content, customize the design if needed, and click generate.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Are QR codes free to create?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, all basic QR code generation features are completely free to use on QRJI.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Can I customize QR code designs?</h4>
                      <p className="text-sm text-muted-foreground">
                        Absolutely! You can customize colors, dot styles, corner styles, and add logo areas to your QR codes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Data Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        We take your privacy seriously. All data processing follows GDPR guidelines and industry best practices.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Secure Communications</h4>
                      <p className="text-sm text-muted-foreground">
                        All communications with our support team are encrypted and handled confidentially.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">No Data Retention</h4>
                      <p className="text-sm text-muted-foreground">
                        QR code content is processed locally in your browser and not stored on our servers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-sm text-muted-foreground">support@qrji.com</p>
                    <p className="text-xs text-muted-foreground mt-1">24-48 hour response time</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">Available on our website</p>
                    <p className="text-xs text-muted-foreground mt-1">Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Phone Support</h4>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground mt-1">Business hours only</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Office Address</h4>
                    <p className="text-sm text-muted-foreground">
                      123 Tech Avenue<br />
                      Suite 456<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-md">
                    <p className="text-xs text-muted-foreground">
                      <strong>Note:</strong> Emergency technical issues are handled 24/7. 
                      For urgent matters, please mark your inquiry as "Technical Support" with "URGENT" in the subject line.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/privacy-questions">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Privacy Questions
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/terms">
                    <Shield className="h-4 w-4 mr-2" />
                    Terms of Service
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/privacy">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enterprise Contact Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Enterprise Solutions</CardTitle>
              <CardDescription>
                Looking for custom QR code solutions for your business? We offer enterprise-grade services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Custom Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Integrate our QR code generation directly into your applications via our API. 
                    Perfect for businesses generating thousands of QR codes daily.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">White Label Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Brand our QR code generator with your company's identity. 
                    Complete customization options available for enterprise clients.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Priority Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get dedicated account management, priority technical support, 
                    and custom feature development for your business needs.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button size="lg">
                  Contact Enterprise Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Developer Resources */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Developer Resources</CardTitle>
              <CardDescription>
                Building applications that need QR code functionality? We have resources to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">API Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our comprehensive API documentation provides everything you need to integrate 
                    QR code generation into your applications. RESTful endpoints, authentication guides, 
                    and code examples in multiple programming languages.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• REST API with JSON responses</li>
                    <li>• Rate limiting and authentication</li>
                    <li>• Webhook support for bulk operations</li>
                    <li>• SDKs for popular languages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Community Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our developer community to get help, share projects, and contribute to 
                    open-source tools. Access sample code, tutorials, and best practices from 
                    other developers using QRJI services.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• GitHub repositories with examples</li>
                    <li>• Developer forum and Discord</li>
                    <li>• Regular webinars and tutorials</li>
                    <li>• Open-source libraries and tools</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security and Compliance */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Security and Compliance Information</CardTitle>
              <CardDescription>
                Learn about our security measures and compliance standards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p>
                  At QRJI, we understand that security and privacy are paramount when handling user data 
                  and providing digital services. Our infrastructure and processes are designed with 
                  security-first principles to protect both our users and their data.
                </p>
                
                <h3>Security Measures</h3>
                <p>
                  We employ industry-standard security measures including end-to-end encryption, 
                  secure data transmission protocols, and regular security audits. Our servers are 
                  hosted in SOC 2 Type II certified data centers with 24/7 monitoring and intrusion detection.
                </p>

                <h3>Data Processing</h3>
                <p>
                  QR code generation happens locally in your browser whenever possible, minimizing 
                  data transmission. When server-side processing is required, data is processed 
                  immediately and not stored unless explicitly requested by the user for features 
                  like QR code history.
                </p>

                <h3>Compliance Standards</h3>
                <p>
                  We maintain compliance with major privacy regulations including GDPR, CCPA, and 
                  other applicable data protection laws. Our privacy practices are regularly reviewed 
                  and updated to meet evolving regulatory requirements.
                </p>

                <h3>Third-Party Integrations</h3>
                <p>
                  Any third-party services we integrate with are carefully vetted for security and 
                  privacy standards. We maintain data processing agreements with all service providers 
                  and ensure they meet our high standards for data protection.
                </p>

                <h3>Incident Response</h3>
                <p>
                  In the unlikely event of a security incident, we have established procedures for 
                  immediate response, user notification, and remediation. Our incident response team 
                  is available 24/7 to address any security concerns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};