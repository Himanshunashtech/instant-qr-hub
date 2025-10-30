import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Shield, Eye, Lock, Database, Globe, UserCheck, AlertTriangle, FileText, MessageCircle } from 'lucide-react';

export const PrivacyQuestions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const privacyFAQs = [
    {
      id: 'data-collection',
      category: 'Data Collection',
      icon: Database,
      question: 'What personal information does QRJI collect?',
      answer: `QRJI collects minimal personal information to provide our services effectively. We collect:

      **Information You Provide:**
      • Email address (for account creation and communication)
      • Name (optional, for personalization)
      • QR code content you enter (processed locally when possible)
      • Feedback and support communications

      **Automatically Collected Information:**
      • IP address and location data (for security and analytics)
      • Browser type and version
      • Device information and screen resolution
      • Usage patterns and feature interactions
      • Timestamps of service usage

      **Optional Information:**
      • Profile customization data
      • Preferences and settings
      • Integration credentials (stored encrypted)

      We do not collect sensitive personal information such as social security numbers, financial data, or health information unless specifically required for a requested service and with your explicit consent.`
    },
    {
      id: 'data-usage',
      category: 'Data Usage',
      icon: Eye,
      question: 'How is my data used and processed?',
      answer: `Your data is used solely to provide, improve, and secure our QR code generation services:

      **Service Provision:**
      • Generate QR codes based on your input
      • Store your QR code history (if enabled)
      • Provide customer support
      • Process account authentication

      **Service Improvement:**
      • Analyze usage patterns to improve features
      • Identify and fix technical issues
      • Develop new functionality based on user needs
      • Optimize performance and user experience

      **Security and Compliance:**
      • Detect and prevent fraudulent activity
      • Monitor for security threats
      • Comply with legal obligations
      • Maintain service availability and integrity

      **Communication:**
      • Send service-related notifications
      • Respond to your inquiries
      • Provide updates about new features (with your consent)

      We never sell your personal data to third parties, use it for unrelated advertising, or share it without your explicit consent except as required by law.`
    },
    {
      id: 'data-storage',
      category: 'Data Storage',
      icon: Lock,
      question: 'Where and how long is my data stored?',
      answer: `We implement secure data storage practices with clear retention policies:

      **Storage Location:**
      • Primary servers located in secure, SOC 2 Type II certified data centers
      • Data centers in the United States and European Union
      • Backup systems with end-to-end encryption
      • Compliance with regional data residency requirements

      **Storage Duration:**
      • Account data: Retained while your account is active plus 30 days after deletion
      • QR code history: Stored locally in your browser by default, server storage only if explicitly enabled
      • Usage analytics: Aggregated and anonymized after 12 months
      • Support communications: Retained for 3 years for quality assurance
      • Security logs: Retained for 1 year for security monitoring

      **Data Deletion:**
      • You can delete your account and all associated data at any time
      • Automated deletion processes for expired data
      • Secure deletion methods that make data unrecoverable
      • Verification of deletion completion within 30 days

      **Backup and Recovery:**
      • Encrypted backups with limited retention periods
      • Disaster recovery procedures that maintain privacy protections
      • Regular testing of backup and recovery systems`
    },
    {
      id: 'data-sharing',
      category: 'Data Sharing',
      icon: Globe,
      question: 'Do you share my data with third parties?',
      answer: `We maintain strict controls over data sharing and only share data when necessary:

      **Service Providers:**
      • Cloud hosting providers (with data processing agreements)
      • Analytics services (Google Analytics with anonymized data)
      • Customer support platforms (encrypted communications)
      • Security monitoring services (threat detection only)

      **Legal Requirements:**
      • Law enforcement requests with valid legal basis
      • Court orders and subpoenas
      • Regulatory compliance requirements
      • National security requests (with transparency reporting)

      **Business Transfers:**
      • Mergers or acquisitions (with continued privacy protections)
      • Asset sales (limited to necessary operational data)
      • Corporate restructuring (maintaining user agreements)

      **Never Shared:**
      • Personal data for marketing by third parties
      • Individual user behavior for advertising
      • Contact information for unsolicited communications
      • Sensitive content from your QR codes

      **Your Control:**
      • Opt-out options for non-essential sharing
      • Notification of any changes to sharing practices
      • Ability to request information about current sharing arrangements
      • Right to object to certain types of data processing`
    },
    {
      id: 'user-rights',
      category: 'User Rights',
      icon: UserCheck,
      question: 'What rights do I have regarding my personal data?',
      answer: `You have comprehensive rights regarding your personal data under GDPR, CCPA, and other privacy laws:

      **Access Rights:**
      • Request a copy of all personal data we hold about you
      • Receive information about how your data is processed
      • Get details about data sharing arrangements
      • Download your data in a machine-readable format

      **Correction Rights:**
      • Update incorrect or incomplete personal information
      • Modify your account preferences and settings
      • Correct any inaccuracies in your stored data
      • Update contact information and communication preferences

      **Deletion Rights (Right to be Forgotten):**
      • Delete your account and all associated data
      • Remove specific pieces of personal information
      • Request deletion of QR code history and content
      • Withdraw consent for data processing

      **Objection Rights:**
      • Object to certain types of data processing
      • Opt out of marketing communications
      • Refuse cookies and tracking (with functional limitations)
      • Request human review of automated decisions

      **Portability Rights:**
      • Export your data to another service
      • Receive data in common formats (JSON, CSV)
      • Transfer QR code history and settings
      • Migrate account information

      **Processing Restriction:**
      • Temporarily limit how we process your data
      • Pause certain automated processing
      • Restrict data sharing while investigating concerns

      To exercise these rights, contact our privacy team at privacy@qrji.com with your request and identity verification.`
    },
    {
      id: 'qr-content',
      category: 'QR Content',
      icon: Shield,
      question: 'Is the content I put in QR codes private?',
      answer: `QR code content privacy is a top priority, and we've designed our system to maximize your privacy:

      **Local Processing:**
      • Most QR codes are generated entirely in your browser
      • Content never leaves your device for basic QR generation
      • No server-side storage of QR content by default
      • JavaScript-based generation for maximum privacy

      **When Content is Transmitted:**
      • Complex QR codes requiring server processing (rare cases)
      • When you explicitly save QR codes to our servers
      • Batch generation from uploaded files
      • Custom enterprise features requiring server-side processing

      **Content Security:**
      • End-to-end encryption for any transmitted content
      • Immediate deletion of content after processing
      • No content analysis or scanning for advertising
      • Secure transmission protocols (HTTPS/TLS 1.3)

      **Content Types and Privacy:**
      • URLs: Processed locally, not stored or analyzed
      • WiFi credentials: Encrypted and processed locally
      • Contact information: Local processing only
      • Personal messages: Never stored on our servers
      • Business information: Optional cloud storage with encryption

      **Your Control:**
      • Choose local-only processing for sensitive content
      • Clear browser storage to remove local history
      • Disable cloud features for maximum privacy
      • Use private browsing mode for temporary QR generation

      **What We Never Do:**
      • Scan or analyze your QR code content
      • Use content for advertising or marketing
      • Share content with third parties
      • Store content without your explicit permission`
    },
    {
      id: 'cookies-tracking',
      category: 'Cookies & Tracking',
      icon: Eye,
      question: 'What cookies and tracking technologies do you use?',
      answer: `We use minimal tracking technologies and provide full transparency about their use:

      **Essential Cookies:**
      • Session management and authentication
      • User preferences and settings storage
      • Shopping cart and form data persistence
      • Security and fraud prevention
      • These cannot be disabled as they're necessary for service functionality

      **Analytics Cookies (Optional):**
      • Google Analytics (anonymized data only)
      • Page view and feature usage statistics
      • Performance monitoring and error tracking
      • Conversion tracking for service improvements
      • You can opt out of these through our cookie preferences

      **Preference Cookies:**
      • Language and region settings
      • Theme and display preferences
      • Accessibility options
      • Marketing communication preferences

      **No Advertising Tracking:**
      • We do not use advertising cookies
      • No third-party advertising networks
      • No behavioral tracking for ads
      • No cross-site tracking or fingerprinting

      **Cookie Management:**
      • Cookie preference center in our privacy settings
      • Browser-based cookie controls
      • Opt-out options for non-essential cookies
      • Regular review and cleanup of unused cookies

      **Local Storage:**
      • QR code history stored locally in your browser
      • User preferences and settings
      • Temporary data for application functionality
      • You can clear this data through browser settings

      **Third-Party Services:**
      • Limited to essential service providers
      • Data processing agreements in place
      • No data sharing for advertising purposes
      • Regular audits of third-party privacy practices`
    },
    {
      id: 'children-privacy',
      category: 'Children\'s Privacy',
      icon: Shield,
      question: 'How do you protect children\'s privacy?',
      answer: `We take children's privacy seriously and comply with COPPA and other child protection regulations:

      **Age Restrictions:**
      • Service intended for users 13 and older
      • Parental consent required for users under 13
      • Age verification processes for account creation
      • Special protections for users under 18

      **Data Collection from Children:**
      • Minimal data collection from users under 18
      • No behavioral tracking for users under 13
      • Parental notification for any data collection
      • Enhanced security for accounts with minor users

      **Parental Rights:**
      • Review any information collected from their child
      • Request deletion of their child's information
      • Refuse further collection of their child's information
      • Receive notification of our information practices

      **Educational Use:**
      • Special privacy protections for school-based usage
      • FERPA compliance for educational records
      • No advertising to children under 13
      • Enhanced consent mechanisms for educational accounts

      **Content Moderation:**
      • Extra scrutiny for content that might involve minors
      • Automated detection of inappropriate content
      • Reporting mechanisms for concerning content
      • Cooperation with law enforcement when required

      **Safety Measures:**
      • No direct messaging or social features for children
      • Limited profile information collection
      • Enhanced account security requirements
      • Regular safety audits and updates

      If you believe a child under 13 has provided us with personal information without parental consent, please contact us immediately at privacy@qrji.com so we can remove this information.`
    },
    {
      id: 'security-measures',
      category: 'Security',
      icon: Lock,
      question: 'What security measures protect my data?',
      answer: `We implement comprehensive security measures to protect your data:

      **Encryption:**
      • End-to-end encryption for data transmission
      • AES-256 encryption for stored data
      • Encrypted backups and archives
      • Perfect Forward Secrecy for all communications

      **Access Controls:**
      • Multi-factor authentication for admin access
      • Role-based access control systems
      • Regular access reviews and audits
      • Principle of least privilege enforcement

      **Infrastructure Security:**
      • SOC 2 Type II certified data centers
      • 24/7 security monitoring and alerting
      • Intrusion detection and prevention systems
      • Regular vulnerability assessments and penetration testing

      **Application Security:**
      • Secure coding practices and code reviews
      • Regular security updates and patches
      • Input validation and sanitization
      • Protection against common web vulnerabilities (OWASP Top 10)

      **Network Security:**
      • Firewalls and network segmentation
      • DDoS protection and mitigation
      • VPN access for administrative functions
      • Secure communication protocols (TLS 1.3)

      **Incident Response:**
      • 24/7 security incident response team
      • Automated threat detection and response
      • Regular incident response drills and testing
      • Transparent communication about security issues

      **Employee Security:**
      • Background checks for employees with data access
      • Regular security training and awareness programs
      • Confidentiality agreements and security policies
      • Limited and monitored access to user data

      **Compliance and Auditing:**
      • Regular third-party security audits
      • Compliance with industry standards (ISO 27001, SOC 2)
      • Continuous monitoring and improvement
      • Annual security assessments and reviews`
    },
    {
      id: 'data-breach',
      category: 'Data Breaches',
      icon: AlertTriangle,
      question: 'What happens if there\'s a data breach?',
      answer: `We have comprehensive procedures in place for handling data breaches:

      **Immediate Response (0-24 hours):**
      • Containment of the security incident
      • Assessment of the scope and impact
      • Preservation of evidence and forensic analysis
      • Activation of incident response team

      **Investigation (24-72 hours):**
      • Detailed forensic investigation
      • Identification of affected data and users
      • Assessment of potential harm to individuals
      • Coordination with security experts and law enforcement

      **Notification Procedures:**
      • Regulatory notification within 72 hours (GDPR requirement)
      • User notification without undue delay if high risk to rights and freedoms
      • Clear, non-technical explanation of what happened
      • Specific information about what data was involved

      **User Communication:**
      • Direct email notification to affected users
      • Public disclosure on our website and social media
      • Detailed FAQ addressing common concerns
      • Regular updates as investigation progresses

      **Remediation Actions:**
      • Immediate steps to prevent further unauthorized access
      • Enhanced security measures and monitoring
      • Password resets for potentially affected accounts
      • Free credit monitoring services if financial data involved

      **Recovery and Improvement:**
      • Full restoration of services with enhanced security
      • Comprehensive review of security measures
      • Implementation of additional safeguards
      • Third-party security assessment and recommendations

      **Transparency and Accountability:**
      • Public post-incident reports (when appropriate)
      • Cooperation with regulatory investigations
      • Compensation or remediation for affected users
      • Commitment to preventing similar incidents

      **Prevention Measures:**
      • Regular security audits and penetration testing
      • Employee training on security best practices
      • Continuous monitoring and threat intelligence
      • Investment in cutting-edge security technologies`
    }
  ];

  const filteredFAQs = privacyFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(privacyFAQs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Questions & Answers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get clear, comprehensive answers to all your privacy-related questions about QRJI. 
              We believe in transparency and want you to understand exactly how we protect your data.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Find Your Privacy Answers</CardTitle>
              <CardDescription>
                Search through our comprehensive privacy FAQ or browse by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search privacy questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSearchTerm(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id}>
                <AccordionItem value={faq.id} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <faq.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-semibold">{faq.question}</div>
                        <Badge variant="outline" className="mt-1">{faq.category}</Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="prose prose-sm max-w-none">
                      {faq.answer.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Read our complete privacy policy for detailed information about our data practices.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/privacy">View Privacy Policy</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact Privacy Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Have specific privacy questions? Contact our dedicated privacy team directly.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Data Rights Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Exercise your data rights including access, deletion, or portability requests.
              </p>
              <Button variant="outline" className="w-full">
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Commitment */}
        <Card>
          <CardHeader>
            <CardTitle>Our Privacy Commitment</CardTitle>
            <CardDescription>
              What you can expect from QRJI regarding your privacy and data protection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p>
                At QRJI, privacy isn't just a policy—it's a fundamental principle that guides every 
                decision we make. We understand that when you use our QR code generation services, 
                you're trusting us with information that matters to you, and we take that responsibility seriously.
              </p>
              
              <h3>Transparency First</h3>
              <p>
                We believe you have the right to know exactly what happens to your data. That's why 
                we provide clear, detailed explanations of our privacy practices without legal jargon 
                or hidden clauses. If you ever have questions, our privacy team is available to provide 
                straight answers.
              </p>

              <h3>Minimal Data Collection</h3>
              <p>
                We only collect data that's necessary to provide our services effectively. Most QR code 
                generation happens entirely in your browser, meaning your content never leaves your device. 
                When we do need to process data on our servers, we do so with the highest security standards 
                and delete it as soon as possible.
              </p>

              <h3>Your Control</h3>
              <p>
                Your data belongs to you, not us. You have complete control over what information you 
                share, how it's used, and when it's deleted. Our privacy controls are designed to be 
                simple and accessible, giving you real control over your digital privacy.
              </p>

              <h3>Continuous Improvement</h3>
              <p>
                Privacy technology and regulations evolve constantly, and so do we. We regularly review 
                and update our privacy practices, invest in new security technologies, and work with 
                privacy experts to ensure we're always providing the best protection possible.
              </p>

              <h3>Global Standards</h3>
              <p>
                Whether you're in California, Europe, or anywhere else in the world, you deserve the 
                same high level of privacy protection. That's why we apply the strictest global privacy 
                standards to all our users, regardless of where they're located.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};