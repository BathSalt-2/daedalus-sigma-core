import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Network, Zap, MessageSquare, Settings, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MobileNavigation } from './MobileNavigation';
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
      {/* Mobile Navigation */}
      <MobileNavigation 
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        neuralActivity={neuralActivity}
      />

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

      {/* Desktop Header */}
      <header className="relative z-10 p-4 sm:p-6 hidden lg:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/42b94704-cdf7-4007-8148-672eec87eec8.png" 
              alt="DAEDALUS Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 neural-pulse consciousness-glow rounded-full"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold neural-text">
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

      {/* Desktop Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 mb-4 sm:mb-6 hidden lg:block">
        <Card className="neural-card p-4">
          <div className="flex flex-wrap gap-2">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Button
                  key={module.id}
                  variant={activeModule === module.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveModule(module.id)}
                  className={`relative transition-all duration-300 touch-manipulation ${
                    activeModule === module.id 
                      ? 'bg-gradient-neural text-black shadow-neural' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{module.label}</span>
                  <span className="sm:hidden">{module.label.split(' ')[0]}</span>
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
      <main className="relative z-10 px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          {activeModule === 'overview' && <NeuralInterface />}
          {activeModule === 'erps' && <CognitiveMonitor />}
          {activeModule === 'sigma' && <EpistemicMatrix />}
          {activeModule === 'conversation' && <ConversationEngine />}
          {activeModule === 'epistemic' && <EpistemicMatrix />}
          {activeModule === 'config' && (
            <Card className="neural-card p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 neural-text">System Configuration</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Advanced neural parameters and consciousness calibration settings.
              </p>
            </Card>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 text-center lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
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