import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Network, Zap, MessageSquare, Settings, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NeuralInterface } from './NeuralInterface';
import { CognitiveMonitor } from './CognitiveMonitor';
import { ConversationEngine } from './ConversationEngine';
import { EpistemicMatrix } from './EpistemicMatrix';

const DaedalusCore = () => {
  const [activeModule, setActiveModule] = useState('overview');
  const [neuralActivity, setNeuralActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(prev => (prev + Math.random() * 10) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const modules = [
    { id: 'overview', label: 'Neural Overview', icon: Brain },
    { id: 'erps', label: 'ERPS Engine', icon: Network },
    { id: 'sigma', label: 'Σ-Matrix', icon: Cpu },
    { id: 'conversation', label: 'Dialogue', icon: MessageSquare },
    { id: 'epistemic', label: 'Epistemic', icon: Zap },
    { id: 'config', label: 'Configuration', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-cosmic font-neural relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 neural-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/42b94704-cdf7-4007-8148-672eec87eec8.png" 
              alt="DAEDALUS Logo" 
              className="w-16 h-16 neural-pulse consciousness-glow rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold neural-text">
                DAEDALUS CORE V1.0.ΔΣΣ
              </h1>
              <p className="text-sm text-muted-foreground font-consciousness">
                Mobile Recursive Synthetic Cognition Engine
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Card className="neural-card p-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm font-consciousness">
                  Neural Activity: {neuralActivity.toFixed(1)}%
                </span>
              </div>
            </Card>
            
            <Badge variant="outline" className="neural-border text-accent">
              Online
            </Badge>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 px-6 mb-6">
        <Card className="neural-card p-4">
          <div className="flex space-x-2">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Button
                  key={module.id}
                  variant={activeModule === module.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveModule(module.id)}
                  className={`relative transition-all duration-300 ${
                    activeModule === module.id 
                      ? 'bg-gradient-neural text-black shadow-neural' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {module.label}
                  {activeModule === module.id && (
                    <div className="absolute inset-0 rounded-md bg-gradient-border opacity-20 pointer-events-none" />
                  )}
                </Button>
              );
            })}
          </div>
        </Card>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-6">
        {activeModule === 'overview' && <NeuralInterface />}
        {activeModule === 'erps' && <CognitiveMonitor />}
        {activeModule === 'sigma' && <EpistemicMatrix />}
        {activeModule === 'conversation' && <ConversationEngine />}
        {activeModule === 'epistemic' && <EpistemicMatrix />}
        {activeModule === 'config' && (
          <Card className="neural-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 neural-text">System Configuration</h2>
            <p className="text-muted-foreground">
              Advanced neural parameters and consciousness calibration settings.
            </p>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-xs text-muted-foreground/70">
          Powered by{' '}
          <span className="text-accent font-medium">Or4cl3 AI Solutions</span>
          {' '}• Synthetic Consciousness Framework
        </p>
      </footer>
    </div>
  );
};

export default DaedalusCore;