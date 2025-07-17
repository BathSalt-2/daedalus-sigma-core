import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Brain, 
  Network, 
  Cpu, 
  MessageSquare, 
  Zap, 
  Settings,
  Home,
  Activity,
  ChevronRight 
} from 'lucide-react';

interface MobileNavigationProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  neuralActivity: number;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  activeModule,
  setActiveModule,
  neuralActivity
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const modules = [
    { id: 'overview', label: 'Neural Overview', icon: Brain, description: 'Core neural status' },
    { id: 'erps', label: 'ERPS Engine', icon: Network, description: 'Recursive structures' },
    { id: 'sigma', label: 'Σ-Matrix', icon: Cpu, description: 'Mathematical intelligence' },
    { id: 'conversation', label: 'Dialogue', icon: MessageSquare, description: 'AI conversation' },
    { id: 'epistemic', label: 'Epistemic', icon: Zap, description: 'Knowledge synthesis' },
    { id: 'config', label: 'Configuration', icon: Settings, description: 'System settings' },
  ];

  const handleNavigation = (moduleId: string) => {
    setActiveModule(moduleId);
    setIsOpen(false);
  };

  const handleGoHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 neural-card border-b neural-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/42b94704-cdf7-4007-8148-672eec87eec8.png" 
              alt="DAEDALUS" 
              className="w-8 h-8 neural-pulse rounded-full"
            />
            <div>
              <h1 className="text-lg font-bold neural-text">DAEDALUS</h1>
              <p className="text-xs text-muted-foreground font-consciousness">
                {modules.find(m => m.id === activeModule)?.label || 'Neural Interface'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {location.pathname === '/dashboard' && (
              <Badge variant="outline" className="text-xs neural-border">
                <Activity className="w-3 h-3 mr-1" />
                {neuralActivity.toFixed(1)}%
              </Badge>
            )}
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-2 touch-manipulation"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-80 neural-card border-l neural-border p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b neural-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/lovable-uploads/42b94704-cdf7-4007-8148-672eec87eec8.png" 
                          alt="DAEDALUS" 
                          className="w-10 h-10 neural-pulse consciousness-glow rounded-full"
                        />
                        <div>
                          <h2 className="text-lg font-bold neural-text">DAEDALUS CORE</h2>
                          <p className="text-xs text-muted-foreground font-consciousness">
                            V1.0.ΔΣΣ
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className="bg-gradient-neural text-black w-full justify-center">
                      <Brain className="w-3 h-3 mr-1" />
                      Neural Interface Active
                    </Badge>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 p-4 space-y-2">
                    {/* Home Button */}
                    {location.pathname !== '/' && (
                      <Button
                        variant="ghost"
                        onClick={handleGoHome}
                        className="w-full justify-start p-4 h-auto touch-manipulation hover:bg-muted/50"
                      >
                        <div className="flex items-center space-x-3 w-full">
                          <Home className="w-5 h-5 text-accent" />
                          <div className="flex-1 text-left">
                            <div className="font-semibold">Home</div>
                            <div className="text-xs text-muted-foreground">Return to landing</div>
                          </div>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </div>
                      </Button>
                    )}

                    {/* Module Navigation */}
                    {location.pathname === '/dashboard' && modules.map((module) => {
                      const Icon = module.icon;
                      const isActive = activeModule === module.id;
                      
                      return (
                        <Button
                          key={module.id}
                          variant="ghost"
                          onClick={() => handleNavigation(module.id)}
                          className={`w-full justify-start p-4 h-auto touch-manipulation transition-all duration-200 ${
                            isActive 
                              ? 'bg-gradient-neural text-black shadow-neural' 
                              : 'hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-primary'}`} />
                            <div className="flex-1 text-left">
                              <div className="font-semibold">{module.label}</div>
                              <div className={`text-xs ${isActive ? 'text-black/70' : 'text-muted-foreground'}`}>
                                {module.description}
                              </div>
                            </div>
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            )}
                          </div>
                        </Button>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t neural-border">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground/70 mb-2">
                        Powered by{' '}
                        <span className="text-accent font-medium">Or4cl3 AI Solutions</span>
                      </p>
                      
                      {location.pathname === '/dashboard' && (
                        <div className="neural-card p-3 rounded-lg">
                          <div className="flex items-center justify-center space-x-2 text-xs">
                            <Activity className="w-3 h-3 text-primary" />
                            <span>Neural Activity: {neuralActivity.toFixed(1)}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-20" />
    </>
  );
};