export function getAvailableModels() {
  return [
    { id: 'nexus-quantum-1', name: 'Nexus Quantum 1 (Omni-Modal)', contextWindow: 128000, speed: 'Ultra Fast' },
    { id: 'nexus-code-pro', name: 'Nexus Code Pro (Full-Stack & C++)', contextWindow: 64000, speed: 'Fast' },
    { id: 'nexus-cipher-sec', name: 'Nexus CipherSec (Vulnerability & Audit)', contextWindow: 32000, speed: 'Standard' },
  ];
}

export function handleChatGeneration(payload) {
  const { prompt, model = 'nexus-quantum-1', temperature = 0.7, maxTokens = 500 } = payload;

  if (!prompt || typeof prompt !== 'string') {
    throw new Error('A valid "prompt" string is required in request payload.');
  }

  // Token estimate
  const promptTokens = Math.ceil(prompt.length / 4);
  const completionTokens = Math.min(maxTokens, 85);

  const sampleResponses = [
    `Analyzing system parameters with ${model} (temp=${temperature}): All architecture units verified. Synthesis complete with zero latency spikes.`,
    `Execution completed. Microservice endpoints generated with authenticated TLS handshakes and modular routing handlers.`,
    `Prompt resolved successfully. Vector embeddings calculated across in-memory memory indexes.`
  ];

  const content = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];

  return {
    id: 'gen_' + Date.now(),
    model,
    created: Math.floor(Date.now() / 1000),
    choices: [
      {
        message: { role: 'assistant', content },
        finish_reason: 'stop',
      }
    ],
    usage: {
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      total_tokens: promptTokens + completionTokens,
    }
  };
}
