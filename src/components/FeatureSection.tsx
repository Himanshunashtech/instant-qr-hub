import React from 'react';
import { Shield, Zap, Download, Smartphone, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Create QR codes instantly without any delays or processing time.',
    color: 'text-yellow-500'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data never leaves your device. Everything is processed locally.',
    color: 'text-green-500'
  },
  {
    icon: Download,
    title: 'Download & Print',
    description: 'Download high-quality PNG files or print directly from your browser.',
    color: 'text-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile.',
    color: 'text-purple-500'
  },
  {
    icon: Globe,
    title: 'Multiple Types',
    description: 'Support for URLs, WiFi, contacts, Bitcoin wallets, and more.',
    color: 'text-cyan-500'
  },
  {
    icon: Lock,
    title: 'No Registration',
    description: 'Use our tool immediately without creating accounts or signing up.',
    color: 'text-red-500'
  }
];

const stats = [
  { number: '2M+', label: 'QR Codes Generated' },
  { number: '150+', label: 'Countries Served' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Available Service' }
];

export const FeatureSection = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our QR Generator?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            The most reliable and feature-rich QR code generator trusted by millions worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4`}>
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Use Cases */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">Perfect For</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Businesses</h4>
              <p className="text-sm text-muted-foreground">Share contact info, websites, and promotions</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Events</h4>
              <p className="text-sm text-muted-foreground">WiFi sharing, event details, and check-ins</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Restaurants</h4>
              <p className="text-sm text-muted-foreground">Digital menus and contactless ordering</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Personal</h4>
              <p className="text-sm text-muted-foreground">Social profiles, Bitcoin wallets, and more</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Create Your QR Code?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join millions of users who trust our platform for their QR code needs.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Generating Now
          </button>
        </div>
      </div>
    </div>
  );
};