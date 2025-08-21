import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin, Shield, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const BitcoinQR = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-500/10 rounded-2xl">
                <Bitcoin className="h-12 w-12 text-orange-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Bitcoin QR Code Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create Bitcoin QR codes for easy cryptocurrency transactions. Generate payment requests, share wallet addresses, 
              and accept Bitcoin payments with professional QR codes.
            </p>
            <Link to="/">
              <Button size="lg" className="text-lg px-8 py-3">
                Generate Bitcoin QR Code Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How to Create Bitcoin QR Codes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Enter Bitcoin Address</h3>
              <p className="text-muted-foreground text-sm">Input your Bitcoin wallet address (starts with 1, 3, or bc1).</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Verify Address</h3>
              <p className="text-muted-foreground text-sm">Double-check your Bitcoin address for accuracy.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Generate QR Code</h3>
              <p className="text-muted-foreground text-sm">Create your Bitcoin QR code instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Share & Accept</h3>
              <p className="text-muted-foreground text-sm">Share your QR code to receive Bitcoin payments easily.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Use Bitcoin QR Codes?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Instant Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enable instant Bitcoin transactions. Customers can scan and pay immediately without manual address entry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Error Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eliminate typing errors that could result in lost payments. QR codes ensure accurate address transmission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                  Mobile Friendly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfect for mobile Bitcoin wallets. Most crypto apps support QR code scanning for easy transactions.
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
            Bitcoin QR Code Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Online Stores</h3>
              <p className="text-sm text-muted-foreground">Accept Bitcoin payments on your e-commerce website</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Freelancers</h3>
              <p className="text-sm text-muted-foreground">Get paid in Bitcoin for your services worldwide</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Donations</h3>
              <p className="text-sm text-muted-foreground">Accept Bitcoin donations for your cause or project</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">Retail Stores</h3>
              <p className="text-sm text-muted-foreground">Enable in-store Bitcoin payments at point of sale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Tips */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Bitcoin QR Code Security Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Address Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Always double-check your Bitcoin address before generating the QR code</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Use a fresh address for each transaction when possible</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Test with a small amount first for new payment setups</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>QR Code Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Only scan QR codes from trusted sources</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Verify the address shown in your wallet before sending</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Be cautious of QR codes from unknown physical locations</p>
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
              Complete Guide to Bitcoin QR Codes
            </h2>
            <p className="text-muted-foreground mb-4">
              Bitcoin QR codes have become the standard method for sharing cryptocurrency addresses and facilitating Bitcoin transactions. 
              These QR codes encode Bitcoin addresses in a format that can be easily scanned by mobile wallets and Bitcoin applications, 
              eliminating the need to manually type long, complex addresses that are prone to errors.
            </p>
            <p className="text-muted-foreground mb-4">
              When creating Bitcoin QR codes, it's essential to understand the different Bitcoin address formats. Legacy addresses 
              start with "1", script addresses start with "3", and the newer Bech32 addresses start with "bc1". All formats are 
              supported by modern Bitcoin wallets and our QR code generator handles them seamlessly.
            </p>
            <p className="text-muted-foreground mb-4">
              For businesses accepting Bitcoin payments, QR codes provide a professional and user-friendly payment experience. 
              Customers can simply scan the code with their mobile wallet, verify the address and amount, and complete the transaction 
              in seconds. This streamlined process reduces payment friction and can increase conversion rates for Bitcoin-accepting merchants.
            </p>
            <p className="text-muted-foreground">
              Our Bitcoin QR code generator creates high-quality, scannable codes that work with all major Bitcoin wallets including 
              Electrum, Blockchain.info, Coinbase, and hardware wallets like Ledger and Trezor. The generated QR codes follow 
              Bitcoin URI scheme standards for maximum compatibility.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Accepting Bitcoin Payments Today
          </h2>
          <p className="text-muted-foreground mb-8">
            Create professional Bitcoin QR codes instantly. Free, secure, and compatible with all major Bitcoin wallets.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-3">
              Generate Bitcoin QR Code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};