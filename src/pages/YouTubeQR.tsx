import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Eye, Share, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const YouTubeQR = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-500/10 rounded-2xl">
                <Youtube className="h-12 w-12 text-red-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              YouTube QR Code Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create YouTube QR codes to promote your videos and channel. Boost engagement, increase subscribers, 
              and make your content easily accessible with scannable QR codes.
            </p>
            <Link to="/">
              <Button size="lg" className="text-lg px-8 py-3">
                Generate YouTube QR Code Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How to Create YouTube QR Codes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Copy YouTube URL</h3>
              <p className="text-muted-foreground text-sm">Get the URL of your YouTube video or channel page.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Paste URL</h3>
              <p className="text-muted-foreground text-sm">Enter the YouTube URL into our generator.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Generate QR Code</h3>
              <p className="text-muted-foreground text-sm">Create your YouTube QR code instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Share & Promote</h3>
              <p className="text-muted-foreground text-sm">Use the QR code to drive traffic to your YouTube content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Benefits of YouTube QR Codes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-500" />
                  Increase Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make it easy for people to find and watch your videos. QR codes eliminate typing and increase click-through rates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share className="h-5 w-5 text-green-500" />
                  Easy Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share your YouTube content anywhere - business cards, flyers, presentations, social media, and merchandise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  Boost Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bridge offline and online marketing. Drive traffic from physical materials to your YouTube content.
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
            YouTube QR Code Marketing Ideas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add YouTube QR codes to business cards to showcase your company videos, testimonials, or product demos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use QR codes on event materials to direct attendees to promotional videos, speaker introductions, or event highlights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Include QR codes on product packaging linking to tutorial videos, unboxing experiences, or user guides.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share YouTube QR codes in Instagram stories, Facebook posts, or Twitter to drive cross-platform engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Print Advertising</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add QR codes to flyers, posters, and magazine ads to connect print campaigns with video content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Include QR codes in presentation slides for audience members to easily access additional video resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            YouTube QR Code Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Use short, clean YouTube URLs for better QR code scanning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Test QR codes before printing to ensure they work properly</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Include a call-to-action near the QR code explaining what viewers will see</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Ensure high contrast between QR code and background</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Maintain minimum size of 2cm x 2cm for reliable scanning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Add the YouTube logo or "Scan to Watch" text for clarity</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              YouTube QR Codes: The Ultimate Marketing Tool
            </h2>
            <p className="text-muted-foreground mb-4">
              YouTube QR codes have become an essential tool for content creators, businesses, and marketers looking to bridge 
              the gap between offline and online marketing. By converting YouTube URLs into scannable QR codes, you can drive 
              traffic from physical materials directly to your video content, increasing views, engagement, and subscriber growth.
            </p>
            <p className="text-muted-foreground mb-4">
              The power of YouTube QR codes lies in their ability to eliminate friction in the user journey. Instead of asking 
              people to search for your channel or remember a complex URL, they can simply scan a code and instantly access 
              your content. This seamless experience significantly improves conversion rates and user engagement.
            </p>
            <p className="text-muted-foreground mb-4">
              For businesses, YouTube QR codes open up numerous marketing opportunities. They can be integrated into print 
              advertisements, business cards, product packaging, trade show materials, and even digital displays. Each scan 
              represents a direct connection between your offline marketing efforts and your YouTube content strategy.
            </p>
            <p className="text-muted-foreground">
              Content creators can leverage YouTube QR codes to expand their reach beyond traditional social media promotion. 
              By incorporating QR codes into merchandise, event materials, or collaboration opportunities, creators can drive 
              consistent traffic to their channels and build stronger connections with their audience across multiple touchpoints.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Boost Your YouTube Growth?
          </h2>
          <p className="text-muted-foreground mb-8">
            Create professional YouTube QR codes and take your video marketing to the next level. Free and unlimited generation.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-3">
              Generate YouTube QR Code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};