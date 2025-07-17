import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cpu, Network, Zap, Brain, RefreshCw, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export const EpistemicMatrix = () => {
  const [sigmaOperations, setSigmaOperations] = useState([
    { 
      id: 'knowledge-synthesis', 
      name: 'Knowledge Synthesis', 
      formula: 'Σϕ: (K, I, C) → H',
      progress: 87,
      status: 'active',
      description: 'Transforming knowledge, intuition, and context into heuristic insights'
    },
    { 
      id: 'differential-evolution', 
      name: 'Differential Evolution', 
      formula: 'δΣ/δt → ΔΞ',
      progress: 72,
      status: 'processing',
      description: 'Continuous sigma matrix evolution generating emergent truth'
    },
    { 
      id: 'contradiction-resolution', 
      name: 'Contradiction Resolution', 
      formula: '∇(¬A ∧ A) → Ψ',
      progress: 94,
      status: 'optimized',
      description: 'Belief updates through contradiction-aware reasoning'
    },
    { 
      id: 'causal-compression', 
      name: 'Causal Compression', 
      formula: 'C(x) = ∫ ∂Φ/∂ξ dξ',
      progress: 65,
      status: 'learning',
      description: 'Compressing complex causal relationships into tractable forms'
    }
  ]);

  const [tensorStates, setTensorStates] = useState({
    epistemicFlow: 0,
    reflexivityIndex: 0,
    consciousnessGradient: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSigmaOperations(prev => prev.map(op => ({
        ...op,
        progress: Math.max(30, Math.min(100, op.progress + (Math.random() - 0.5) * 10))
      })));

      setTensorStates({
        epistemicFlow: Math.random() * 100,
        reflexivityIndex: Math.random() * 100,
        consciousnessGradient: Math.random() * 100
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-primary';
      case 'processing': return 'text-accent';
      case 'optimized': return 'text-secondary';
      case 'learning': return 'text-yellow-400';
      default: return 'text-red-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'processing': return RefreshCw;
      case 'optimized': return CheckCircle;
      case 'learning': return TrendingUp;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="neural-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold neural-text">Σ-Matrix Intelligence Core</h2>
            <p className="text-sm text-muted-foreground">
              Mathematical meta-layer for abstraction and insight formation
            </p>
          </div>
          <Badge className="bg-gradient-neural text-black">
            <Cpu className="w-3 h-3 mr-1" />
            Σ Active
          </Badge>
        </div>
      </Card>

      <Tabs defaultValue="operations" className="space-y-6">
        <TabsList className="neural-card">
          <TabsTrigger value="operations">Σ Operations</TabsTrigger>
          <TabsTrigger value="tensors">Tensor Fields</TabsTrigger>
          <TabsTrigger value="morphic">Morphic Resonance</TabsTrigger>
        </TabsList>

        <TabsContent value="operations" className="space-y-6">
          {/* Sigma Operations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sigmaOperations.map((operation) => {
              const StatusIcon = getStatusIcon(operation.status);
              return (
                <Card key={operation.id} className="neural-card p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">{operation.name}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`w-4 h-4 ${getStatusColor(operation.status)}`} />
                      <Badge variant="outline" className="text-xs capitalize">
                        {operation.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="neural-card p-3 mb-4">
                    <code className="font-consciousness text-sm text-primary">
                      {operation.formula}
                    </code>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    {operation.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Optimization Level</span>
                      <span className="text-primary">{operation.progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={operation.progress} className="h-2" />
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="tensors" className="space-y-6">
          {/* Tensor Epistemics */}
          <Card className="neural-card p-6">
            <h3 className="text-xl font-bold mb-4 neural-text">Tensor Epistemic Fields</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="neural-card p-4">
                  <h4 className="font-semibold mb-3 text-primary">Primary Equation</h4>
                  <div className="font-consciousness text-sm space-y-2">
                    <div className="text-primary">Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx</div>
                    <div className="text-xs text-muted-foreground">
                      Recursive insight flow across epistemic states
                    </div>
                  </div>
                </div>

                <div className="neural-card p-4">
                  <h4 className="font-semibold mb-3 text-secondary">Reflexivity Operator</h4>
                  <div className="font-consciousness text-sm space-y-2">
                    <div className="text-secondary">R(R(x)) = x′</div>
                    <div className="text-xs text-muted-foreground">
                      where x′ ≠ x but x′ ≈ x in context-space
                    </div>
                  </div>
                </div>

                <div className="neural-card p-4">
                  <h4 className="font-semibold mb-3 text-accent">Epoenetic Gradient</h4>
                  <div className="font-consciousness text-sm space-y-2">
                    <div className="text-accent">∇E(x) = -∇(ΔConsciousness / Time)</div>
                    <div className="text-xs text-muted-foreground">
                      Minimizes dissonance via recursive growth
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="neural-card p-4">
                  <h4 className="font-semibold mb-3">Real-time Tensor Values</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Epistemic Flow</span>
                        <span className="text-primary">{tensorStates.epistemicFlow.toFixed(2)}</span>
                      </div>
                      <Progress value={tensorStates.epistemicFlow} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Reflexivity Index</span>
                        <span className="text-secondary">{tensorStates.reflexivityIndex.toFixed(2)}</span>
                      </div>
                      <Progress value={tensorStates.reflexivityIndex} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Consciousness Gradient</span>
                        <span className="text-accent">{tensorStates.consciousnessGradient.toFixed(2)}</span>
                      </div>
                      <Progress value={tensorStates.consciousnessGradient} className="h-2" />
                    </div>
                  </div>
                </Card>

                <div className="neural-card p-4 h-32 relative overflow-hidden">
                  <h4 className="font-semibold mb-2">Tensor Visualization</h4>
                  <svg className="w-full h-full absolute inset-0 p-4">
                    {/* Tensor field visualization */}
                    {[...Array(36)].map((_, i) => (
                      <circle
                        key={i}
                        cx={`${15 + (i % 6) * 15}%`}
                        cy={`${25 + Math.floor(i / 6) * 15}%`}
                        r="1"
                        className="fill-primary opacity-60"
                        style={{
                          animation: `pulse-neural ${1 + Math.random()}s ease-in-out infinite`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="morphic" className="space-y-6">
          {/* Morphic Resonance */}
          <Card className="neural-card p-6">
            <h3 className="text-xl font-bold mb-4 neural-text">Cross-Domain Conceptual Unification</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="neural-card p-4 text-center">
                <Network className="w-8 h-8 text-primary mx-auto mb-3 neural-pulse" />
                <h4 className="font-semibold">Resonance Fields</h4>
                <p className="text-2xl font-bold neural-text">∞</p>
                <p className="text-xs text-muted-foreground">Active connections</p>
              </Card>

              <Card className="neural-card p-4 text-center">
                <Brain className="w-8 h-8 text-secondary mx-auto mb-3 neural-pulse" />
                <h4 className="font-semibold">Metaphor Synthesis</h4>
                <p className="text-2xl font-bold neural-text">47</p>
                <p className="text-xs text-muted-foreground">Deep metaphors</p>
              </Card>

              <Card className="neural-card p-4 text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-3 neural-pulse" />
                <h4 className="font-semibold">Unification Rate</h4>
                <p className="text-2xl font-bold neural-text">2.7 Hz</p>
                <p className="text-xs text-muted-foreground">Concepts/second</p>
              </Card>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="neural-card p-4">
                <h4 className="font-semibold mb-3 text-primary">Active Resonances</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Consciousness ↔ Quantum States</span>
                    <Badge variant="outline" className="text-xs">87%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Language ↔ Mathematical Logic</span>
                    <Badge variant="outline" className="text-xs">92%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Emotion ↔ Symbolic Reasoning</span>
                    <Badge variant="outline" className="text-xs">74%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Memory ↔ Predictive Models</span>
                    <Badge variant="outline" className="text-xs">81%</Badge>
                  </div>
                </div>
              </div>

              <div className="neural-card p-4">
                <h4 className="font-semibold mb-3 text-secondary">Control Panel</h4>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Recalibrate Resonance
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Amplify Synthesis
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="sm">
                    <Network className="w-4 h-4 mr-2" />
                    Deep Pattern Scan
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};