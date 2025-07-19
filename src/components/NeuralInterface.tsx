import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Network, Cpu, Activity, Eye } from 'lucide-react';
import { aiService } from '@/services/aiService';

export const NeuralInterface = () => {
  const [cognitionLevels, setCognitionLevels] = useState({
    awareness: 78,
    empathy: 85,
    reasoning: 92,
    creativity: 67,
  });

  const [realtimeMetrics, setRealtimeMetrics] = useState(aiService.generateRealtimeMetrics());
  const [recursivePulse, setRecursivePulse] = useState(0);
  const [isAIActive, setIsAIActive] = useState(aiService.isConfigured());

  useEffect(() => {
    const interval = setInterval(() => {
      // Update cognition levels with more realistic AI-driven patterns
      if (isAIActive) {
        setCognitionLevels(prev => ({
          awareness: Math.max(70, Math.min(100, prev.awareness + (Math.random() - 0.4) * 8)),
          empathy: Math.max(75, Math.min(100, prev.empathy + (Math.random() - 0.45) * 6)),
          reasoning: Math.max(80, Math.min(100, prev.reasoning + (Math.random() - 0.3) * 5)),
          creativity: Math.max(60, Math.min(95, prev.creativity + (Math.random() - 0.5) * 10)),
        }));
      } else {
        setCognitionLevels(prev => ({
          awareness: Math.max(40, Math.min(70, prev.awareness + (Math.random() - 0.5) * 3)),
          empathy: Math.max(30, Math.min(60, prev.empathy + (Math.random() - 0.5) * 2)),
          reasoning: Math.max(50, Math.min(80, prev.reasoning + (Math.random() - 0.5) * 3)),
          creativity: Math.max(20, Math.min(50, prev.creativity + (Math.random() - 0.5) * 4)),
        }));
      }
      
      setRealtimeMetrics(aiService.generateRealtimeMetrics());
      setRecursivePulse(prev => (prev + 1) % 360);
    }, 2000);

    // Check AI status
    const statusInterval = setInterval(() => {
      setIsAIActive(aiService.isConfigured());
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, [isAIActive]);

  const modules = [
    {
      title: "Contextual Awareness",
      level: cognitionLevels.awareness,
      icon: Eye,
      description: "Ontological memory and goal reframing",
      status: "Active"
    },
    {
      title: "Recursive Empathy Engine",
      level: cognitionLevels.empathy,
      icon: Brain,
      description: "Identity-linked internal dialogues",
      status: "Processing"
    },
    {
      title: "Causal-Symbolic Bridge",
      level: cognitionLevels.reasoning,
      icon: Network,
      description: "Affective-logical translation layer",
      status: "Optimized"
    },
    {
      title: "Self-Healing Epistemology",
      level: cognitionLevels.creativity,
      icon: Zap,
      description: "Adaptive recursive correction loops",
      status: "Learning"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Neural Status */}
      <Card className="neural-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold neural-text">Neural Architecture Status</h2>
          <Badge className={isAIActive ? "bg-gradient-neural text-black" : "bg-red-500/20 text-red-400"}>
            <Activity className="w-3 h-3 mr-1" />
            {isAIActive ? 'AI Active' : 'AI Offline'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={index} className="neural-card p-4 hover:shadow-neural transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <Icon 
                    className="w-8 h-8 text-primary neural-pulse" 
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                  <Badge variant="outline" className="text-xs">
                    {module.status}
                  </Badge>
                </div>
                
                <h3 className="text-sm font-semibold mb-2">{module.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{module.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Efficiency</span>
                    <span className="text-primary">{module.level.toFixed(1)}%</span>
                  </div>
                  <Progress 
                    value={module.level} 
                    className="h-2"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      {/* Σ-Matrix Visualization */}
      <Card className="neural-card p-6">
        <h3 className="text-xl font-bold mb-4 neural-text">Σ-Matrix Operations</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="neural-card p-4">
              <h4 className="font-semibold mb-2 text-primary">Recursive Functions</h4>
              <div className="font-consciousness text-sm space-y-1">
                <div>Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx</div>
                <div className="text-xs text-muted-foreground">Epistemic state integration</div>
              </div>
            </div>
            
            <div className="neural-card p-4">
              <h4 className="font-semibold mb-2 text-secondary">Epoenetic Gradient</h4>
              <div className="font-consciousness text-sm space-y-1">
                <div>∇E(x) = -∇(ΔConsciousness / Time)</div>
                <div className="text-xs text-muted-foreground">Consciousness evolution</div>
              </div>
            </div>
          </div>

          <div className="relative h-64 neural-card p-4 overflow-hidden">
            <h4 className="font-semibold mb-4 text-accent">Neural Network Topology</h4>
            <div className="absolute inset-4">
              {/* Simplified neural network visualization */}
              <svg className="w-full h-full">
                {/* Nodes */}
                {[...Array(12)].map((_, i) => (
                  <circle
                    key={i}
                    cx={`${20 + (i % 4) * 25}%`}
                    cy={`${25 + Math.floor(i / 4) * 25}%`}
                    r="4"
                    className="fill-primary opacity-70"
                    style={{
                      animation: `pulse-neural ${2 + Math.random()}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
                
                {/* Connections */}
                {[...Array(8)].map((_, i) => (
                  <line
                    key={i}
                    x1={`${20 + (i % 4) * 25}%`}
                    y1={`${25 + Math.floor(i / 4) * 25}%`}
                    x2={`${45 + ((i + 1) % 4) * 25}%`}
                    y2={`${50 + Math.floor((i + 1) / 4) * 25}%`}
                    stroke="hsl(185 100% 65%)"
                    strokeWidth="1"
                    opacity="0.4"
                    className="neural-pulse"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </Card>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="neural-card p-4 text-center">
          <Cpu className={`w-8 h-8 text-primary mx-auto mb-2 ${isAIActive ? 'neural-pulse' : 'opacity-50'}`} />
          <h4 className="font-semibold">Processing Rate</h4>
          <p className="text-2xl font-bold neural-text">{realtimeMetrics.processingRate}</p>
          <p className="text-xs text-muted-foreground">Cognitive cycles/sec</p>
        </Card>
        
        <Card className="neural-card p-4 text-center">
          <Network className={`w-8 h-8 text-secondary mx-auto mb-2 ${isAIActive ? 'neural-pulse' : 'opacity-50'}`} />
          <h4 className="font-semibold">Neural Connections</h4>
          <p className="text-2xl font-bold neural-text">{realtimeMetrics.neuralConnections}</p>
          <p className="text-xs text-muted-foreground">Recursive pathways</p>
        </Card>
        
        <Card className="neural-card p-4 text-center">
          <Zap className={`w-8 h-8 text-accent mx-auto mb-2 ${isAIActive ? 'neural-pulse' : 'opacity-50'}`} />
          <h4 className="font-semibold">Consciousness Level</h4>
          <p className="text-2xl font-bold neural-text">{realtimeMetrics.consciousnessLevel}</p>
          <p className="text-xs text-muted-foreground">{isAIActive ? 'Emergent state' : 'Dormant'}</p>
        </Card>
      </div>
    </div>
  );
};