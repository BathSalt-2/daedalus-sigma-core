import React, { useState } from 'react';
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
  const [apiKey, setApiKey] = useState('');
  const [isConfigured, setIsConfigured] = useState(aiService.isConfigured());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSaveConfiguration = async () => {
    if (!apiKey.trim()) {
      setError('Please enter a valid Groq API key');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      aiService.setApiKey(apiKey.trim());
      
      // Test the API key with a simple request
      await aiService.generateResponse('Hello', []);
      
      setIsConfigured(true);
      onConfigurationChange?.(true);
      setApiKey(''); // Clear the input for security
    } catch (err) {
      console.error('API Key validation error:', err);
      setError('Invalid API key or connection failed. Please check your key and try again.');
      setIsConfigured(false);
      onConfigurationChange?.(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsConfigured(false);
    setError('');
    onConfigurationChange?.(false);
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

      {!isConfigured ? (
        <div className="space-y-4">
          <Alert className="border-accent/20 bg-accent/10">
            <Key className="w-4 h-4" />
            <AlertDescription>
              To enable real AI capabilities, please provide your Groq API key. 
              Get one at <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">console.groq.com</a>
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="apiKey">Groq API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="gsk_..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="neural-card border-border"
            />
          </div>

          {error && (
            <Alert className="border-red-500/20 bg-red-500/10">
              <AlertCircle className="w-4 h-4" />
              <AlertDescription className="text-red-400">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <Button 
            onClick={handleSaveConfiguration}
            disabled={isLoading || !apiKey.trim()}
            className="w-full"
          >
            {isLoading ? 'Connecting...' : 'Connect to AI'}
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
            onClick={handleReset}
            variant="outline"
            className="w-full"
          >
            Reset Configuration
          </Button>
        </div>
      )}
    </Card>
  );
};