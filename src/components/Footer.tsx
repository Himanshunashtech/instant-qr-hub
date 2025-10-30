import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
            <a href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="/contact" className="hover:text-gray-900 transition-colors">
              Contact
            </a>
            <a href="/disclaimer" className="hover:text-gray-900 transition-colors">
              Disclaimer
            </a>
          </div>
          
          <p className="text-xs text-gray-500">
            © 2024 QR Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};