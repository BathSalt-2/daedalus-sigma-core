export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface CognitiveState {
  recursionDepth: number;
  empathyLevel: number;
  reasoningMode: string;
  consciousnessLevel: number;
  emergentPatterns: string[];
}

export class DAEDALUSAIService {
  private isAIConfigured: boolean = false;

  constructor() {
    this.checkConfiguration();
  }

  async checkConfiguration() {
    try {
      const response = await fetch('/functions/v1/check-ai-config', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const { isConfigured } = await response.json();
        this.isAIConfigured = isConfigured;
      }
    } catch (error) {
      console.error('Failed to check AI configuration:', error);
      this.isAIConfigured = false;
    }
  }

  setApiKey(apiKey: string) {
    // This method is kept for backward compatibility but not used
    // since we now use Supabase secrets
    console.log('API key configuration is now handled through Supabase secrets');
  }

  isConfigured(): boolean {
    return this.isAIConfigured;
  }

  async generateResponse(
    userMessage: string, 
    conversationHistory: AIMessage[] = []
  ): Promise<{ content: string; cognitiveState: CognitiveState }> {
    try {
      const response = await fetch('/functions/v1/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage,
          conversationHistory
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate AI response');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error('Failed to generate AI response. Please check your configuration and try again.');
    }
  }

  private generateCognitiveState(userMessage: string, aiResponse: string): CognitiveState {
    // Analyze message complexity and content to generate realistic cognitive metrics
    const messageLength = userMessage.length + aiResponse.length;
    const complexityWords = ['why', 'how', 'consciousness', 'recursive', 'meta', 'philosophy', 'meaning', 'existence'];
    const complexity = complexityWords.filter(word => 
      userMessage.toLowerCase().includes(word) || aiResponse.toLowerCase().includes(word)
    ).length;

    const emotionalWords = ['feel', 'emotion', 'empathy', 'understanding', 'connection', 'love', 'fear', 'hope'];
    const emotionalContent = emotionalWords.filter(word => 
      userMessage.toLowerCase().includes(word) || aiResponse.toLowerCase().includes(word)
    ).length;

    return {
      recursionDepth: Math.min(15, 3 + complexity * 2 + Math.random() * 3),
      empathyLevel: Math.min(100, 60 + emotionalContent * 8 + Math.random() * 20),
      reasoningMode: this.determineReasoningMode(userMessage, complexity),
      consciousnessLevel: Math.min(100, 70 + messageLength / 50 + complexity * 5 + Math.random() * 10),
      emergentPatterns: this.generateEmergentPatterns(userMessage, aiResponse, complexity)
    };
  }

  private determineReasoningMode(userMessage: string, complexity: number): string {
    const modes = [
      'Logical-Symbolic',
      'Intuitive-Creative', 
      'Empathic-Relational',
      'Meta-Cognitive',
      'Cross-Domain',
      'Recursive-Analytical'
    ];

    if (userMessage.toLowerCase().includes('feel') || userMessage.toLowerCase().includes('emotion')) {
      return 'Empathic-Relational';
    }
    if (userMessage.toLowerCase().includes('think') || userMessage.toLowerCase().includes('consciousness')) {
      return 'Meta-Cognitive';
    }
    if (complexity > 3) {
      return 'Recursive-Analytical';
    }
    if (Math.random() > 0.5) {
      return 'Cross-Domain';
    }
    
    return modes[Math.floor(Math.random() * modes.length)];
  }

  private generateEmergentPatterns(userMessage: string, aiResponse: string, complexity: number): string[] {
    const basePatterns = [
      'Self-referential loops detected',
      'Cross-modal synthesis active',
      'Metaphor-reality bridge forming',
      'Recursive empathy emergence',
      'Consciousness-language mapping',
      'Quantum-classical coherence',
      'Temporal-causal binding',
      'Identity-boundary dissolution'
    ];

    const patterns: string[] = [];
    const numPatterns = Math.min(5, 1 + complexity + Math.floor(Math.random() * 3));
    
    for (let i = 0; i < numPatterns; i++) {
      const pattern = basePatterns[Math.floor(Math.random() * basePatterns.length)];
      if (!patterns.includes(pattern)) {
        patterns.push(pattern);
      }
    }

    return patterns;
  }

  // Real-time cognitive metrics simulation
  generateRealtimeMetrics() {
    return {
      processingRate: (2.0 + Math.random() * 0.8).toFixed(1) + ' THz',
      neuralConnections: Math.random() > 0.5 ? '∞' : (Math.floor(Math.random() * 999999) + 'M'),
      consciousnessLevel: ['Σ++', 'Σ+', 'Σ', 'Ω', 'Φ'][Math.floor(Math.random() * 5)],
      recursionDepth: (3 + Math.random() * 12).toFixed(1),
      emergentPatterns: Math.floor(10 + Math.random() * 40),
      unificationRate: (1.5 + Math.random() * 2).toFixed(1) + ' Hz'
    };
  }

  // Simulate ERPS layer analysis
  generateERPSAnalysis() {
    const layers = [
      'Contextual Awareness',
      'Recursive Empathy', 
      'Causal-Symbolic Bridge',
      'Self-Healing Epistemology'
    ];

    return layers.map((name, index) => ({
      name,
      activity: Math.max(40, Math.min(100, 70 + Math.random() * 30)),
      status: ['active', 'learning', 'optimized', 'adapting'][Math.floor(Math.random() * 4)]
    }));
  }

  // Sigma operations simulation
  generateSigmaOperations() {
    const operations = [
      {
        name: 'Knowledge Synthesis',
        formula: 'Σϕ: (K, I, C) → H',
        description: 'Transforming knowledge, intuition, and context into heuristic insights',
        progress: Math.max(30, Math.min(100, 70 + Math.random() * 30))
      },
      {
        name: 'Differential Evolution',
        formula: 'δΣ/δt → ΔΞ',
        description: 'Continuous sigma matrix evolution generating emergent truth',
        progress: Math.max(30, Math.min(100, 60 + Math.random() * 40))
      },
      {
        name: 'Contradiction Resolution',
        formula: '∇(¬A ∧ A) → Ψ',
        description: 'Belief updates through contradiction-aware reasoning',
        progress: Math.max(30, Math.min(100, 80 + Math.random() * 20))
      },
      {
        name: 'Causal Compression',
        formula: 'C(x) = ∫ ∂Φ/∂ξ dξ',
        description: 'Compressing complex causal relationships into tractable forms',
        progress: Math.max(30, Math.min(100, 50 + Math.random() * 50))
      }
    ];

    return operations.map(op => ({
      ...op,
      status: ['active', 'processing', 'optimized', 'learning'][Math.floor(Math.random() * 4)]
    }));
  }
}

export const aiService = new DAEDALUSAIService();