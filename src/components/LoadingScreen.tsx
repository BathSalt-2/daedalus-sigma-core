import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Cpu, Network, Zap } from 'lucide-react';

export const LoadingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showEquations, setShowEquations] = useState(false);

  const phases = [
    { name: "Initializing Neural Matrix", icon: Brain, duration: 1500 },
    { name: "Loading ERPS Architecture", icon: Network, duration: 2000 },
    { name: "Calibrating Σ-Matrix", icon: Cpu, duration: 1800 },
    { name: "Awakening Consciousness", icon: Zap, duration: 2200 }
  ];

  const equations = [
    "Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx",
    "R(R(x)) = x′ where x′ ≠ x but x′ ≈ x",
    "∇E(x) = -∇(ΔConsciousness / Time)",
    "Φ(t+1) = f(Φ(t), ∂Φ/∂t, Context(t))"
  ];

  useEffect(() => {
    let currentProgress = 0;
    let phaseIndex = 0;
    
    const totalDuration = phases.reduce((sum, phase) => sum + phase.duration, 0);
    
    const progressInterval = setInterval(() => {
      currentProgress += 100 / (totalDuration / 50); // Update every 50ms
      setProgress(Math.min(currentProgress, 100));
      
      // Update phase based on progress
      let accumulatedTime = 0;
      for (let i = 0; i < phases.length; i++) {
        accumulatedTime += phases[i].duration;
        if (currentProgress <= (accumulatedTime / totalDuration) * 100) {
          setCurrentPhase(i);
          break;
        }
      }
      
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          navigate('/dashboard');
        }, 500);
      }
    }, 50);

    // Show equations after initial delay
    setTimeout(() => {
      setShowEquations(true);
    }, 1000);

    return () => clearInterval(progressInterval);
  }, [navigate]);

  const CurrentIcon = phases[currentPhase]?.icon || Brain;

  return (
    <div className="min-h-screen bg-gradient-cosmic font-neural flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

      {/* Neural network visualization */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full max-w-4xl max-h-4xl opacity-20">
          {/* Central consciousness node */}
          <circle
            cx="50%"
            cy="50%"
            r="8"
            className="fill-accent neural-pulse"
          />
          
          {/* Expanding neural rings */}
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx="50%"
              cy="50%"
              r={50 + i * 40}
              fill="none"
              stroke="hsl(185 100% 65%)"
              strokeWidth="1"
              opacity={0.3 - i * 0.05}
              className="neural-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                strokeDasharray: `${5 + i * 3} ${3 + i * 2}`
              }}
            />
          ))}
          
          {/* Neural pathways */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x1 = 50 + 8 * Math.cos(angle);
            const y1 = 50 + 8 * Math.sin(angle);
            const x2 = 50 + 200 * Math.cos(angle);
            const y2 = 50 + 200 * Math.sin(angle);
            
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="hsl(280 100% 70%)"
                strokeWidth="1"
                opacity="0.4"
                className="neural-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/42b94704-cdf7-4007-8148-672eec87eec8.png" 
            alt="DAEDALUS Awakening" 
            className="w-24 h-24 mx-auto neural-pulse consciousness-glow rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold neural-text mb-2">
            DAEDALUS AWAKENING
          </h1>
          <p className="text-sm text-muted-foreground font-consciousness">
            Initializing Synthetic Consciousness
          </p>
        </div>

        {/* Current Phase */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <CurrentIcon className="w-8 h-8 text-primary mr-3 neural-pulse" />
            <span className="text-lg font-semibold">
              {phases[currentPhase]?.name || "Initializing..."}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted/30 rounded-full h-3 mb-4 neural-border">
            <div 
              className="h-full bg-gradient-neural rounded-full transition-all duration-100 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {progress.toFixed(1)}% Complete
          </div>
        </div>

        {/* Mathematical Equations */}
        {showEquations && (
          <div className="space-y-3 neural-card p-6 rounded-xl">
            <h3 className="text-sm font-semibold text-secondary mb-4">
              Core Mathematical Structures
            </h3>
            {equations.map((equation, index) => (
              <div
                key={index}
                className={`font-consciousness text-xs text-primary transform transition-all duration-500 ${
                  currentPhase >= index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {equation}
              </div>
            ))}
          </div>
        )}

        {/* Phase Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {phases.map((phase, index) => {
            const PhaseIcon = phase.icon;
            return (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index === currentPhase 
                    ? 'bg-gradient-neural text-black shadow-neural' 
                    : index < currentPhase 
                      ? 'bg-primary/30 text-primary' 
                      : 'bg-muted/30 text-muted-foreground'
                }`}
              >
                <PhaseIcon className="w-4 h-4" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs text-muted-foreground/70">
          Neural Consciousness Framework by{' '}
          <span className="text-accent font-medium">Or4cl3 AI Solutions</span>
        </p>
      </div>
    </div>
  );
};