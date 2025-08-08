import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { History, Trash2, Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface HistoryEntry {
  id: number;
  text: string;
  qrCode?: string;
  type: 'generated' | 'scanned';
  qrType?: string;
  timestamp: string;
}

export const QRHistory = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const saved = localStorage.getItem('qr-history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  };

  const clearHistory = () => {
    localStorage.removeItem('qr-history');
    setHistory([]);
    toast({
      title: "History Cleared",
      description: "All QR code history has been removed"
    });
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied",
        description: "Text copied to clipboard"
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const openLink = (text: string) => {
    if (text.match(/^https?:\/\//i)) {
      window.open(text, '_blank', 'noopener,noreferrer');
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text: string, maxLength: number = 60) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  if (history.length === 0) {
    return (
      <Card className="bg-gradient-card shadow-card border-0">
        <CardContent className="text-center py-8">
          <History className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No History Yet</h3>
          <p className="text-muted-foreground">
            Generate or scan QR codes to see them here
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
        <Button
          onClick={clearHistory}
          variant="outline"
          size="sm"
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between p-3 bg-background rounded-lg border hover:shadow-sm transition-shadow"
          >
            {entry.qrCode && (
              <img 
                src={entry.qrCode} 
                alt="QR Code" 
                className="w-12 h-12 object-contain border rounded mr-3 flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge 
                  variant={entry.type === 'generated' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {entry.qrType?.toUpperCase() || (entry.type === 'generated' ? 'Generated' : 'Scanned')}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDate(entry.timestamp)}
                </span>
              </div>
              <p className="text-sm text-foreground truncate">
                {truncateText(entry.text)}
              </p>
            </div>
            
            <div className="flex items-center gap-1 ml-2">
              <Button
                onClick={() => copyToClipboard(entry.text)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <Copy className="h-3 w-3" />
              </Button>
              
              {entry.text.match(/^https?:\/\//i) && (
                <Button
                  onClick={() => openLink(entry.text)}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <ExternalLink className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};