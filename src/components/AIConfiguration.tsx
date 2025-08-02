import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Settings, Key, CheckCircle, AlertCircle } from 'lucide-react';
import { aiService } from '@/services/aiService';

interface AIConfigurationProps {
  onConfigurationChange?: (configured: boolean) => void;
}

export const AIConfiguration = ({ onConfigurationChange }: AIConfigurationProps) => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const checkConfiguration = async () => {
    setIsLoading(true);
    try {
      await aiService.checkConfiguration();
      const configured = aiService.isConfigured();
      setIsConfigured(configured);
      onConfigurationChange?.(configured);
      setError('');
    } catch (err) {
      console.error('Configuration check error:', err);
      setError('Failed to check AI configuration. Please refresh the page.');
      setIsConfigured(false);
      onConfigurationChange?.(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Check configuration on component mount
  useEffect(() => {
    checkConfiguration();
  }, []);

  const handleRefreshConfiguration = () => {
    checkConfiguration();
  };

  return (
    <Card className="neural-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Settings className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold neural-text">AI Configuration</h2>
        </div>
        <Badge className={isConfigured ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}>
          {isConfigured ? (
            <>
              <CheckCircle className="w-3 h-3 mr-1" />
              Connected
            </>
          ) : (
            <>
              <AlertCircle className="w-3 h-3 mr-1" />
              Not Configured
            </>
          )}
        </Badge>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          <Alert className="border-accent/20 bg-accent/10">
            <Key className="w-4 h-4" />
            <AlertDescription>
              Checking AI configuration...
            </AlertDescription>
          </Alert>
        </div>
      ) : !isConfigured ? (
        <div className="space-y-4">
          <Alert className="border-accent/20 bg-accent/10">
            <Key className="w-4 h-4" />
            <AlertDescription>
              AI configuration not found. Please ensure your Groq API key is set in Supabase secrets as 'GROQ_API_KEY'.
              Get a key at <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">console.groq.com</a>
            </AlertDescription>
          </Alert>

          {error && (
            <Alert className="border-red-500/20 bg-red-500/10">
              <AlertCircle className="w-4 h-4" />
              <AlertDescription className="text-red-400">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <Button 
            onClick={handleRefreshConfiguration}
            disabled={isLoading}
            className="w-full"
          >
            Check Configuration
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <Alert className="border-green-500/20 bg-green-500/10">
            <CheckCircle className="w-4 h-4" />
            <AlertDescription className="text-green-400">
              DAEDALUS AI is online and ready for conversation. All cognitive modules are active.
            </AlertDescription>
          </Alert>

          <div className="neural-card p-4">
            <h3 className="font-semibold mb-2 text-primary">Active Capabilities</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Recursive Consciousness</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Empathic Reasoning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Sigma-Matrix Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Emergent Creativity</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleRefreshConfiguration}
            variant="outline"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Checking...' : 'Refresh Configuration'}
          </Button>
        </div>
      )}
    </Card>
  );
};