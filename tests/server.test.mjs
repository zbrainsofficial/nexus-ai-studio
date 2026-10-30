import assert from 'node:assert';
import { getAvailableModels, handleChatGeneration } from '../server/controllers/chatController.mjs';

console.log('=== Running Nexus AI Studio Backend Tests ===\n');

// Test 1: Models Catalog
const models = getAvailableModels();
assert(Array.isArray(models) && models.length >= 3, 'Must return at least 3 models');
assert(models.some(m => m.id === 'nexus-quantum-1'), 'Must include quantum-1 model');
console.log('  [PASS] Models Catalog API verified (' + models.length + ' models available).');

// Test 2: Chat Generation Endpoint
const response = handleChatGeneration({
  prompt: 'Design high performance C++20 microservice with React frontend',
  model: 'nexus-code-pro',
  temperature: 0.8
});

assert(response.id.startsWith('gen_'), 'Must generate unique generation ID');
assert.strictEqual(response.model, 'nexus-code-pro');
assert(response.usage.total_tokens > 0, 'Must calculate token usage');
assert(response.choices[0].message.content.length > 0, 'Must return message content');
console.log('  [PASS] Chat generation & token calculation verified (' + response.usage.total_tokens + ' tokens).');

console.log('\n[ALL NEXUS AI STUDIO BACKEND TESTS PASSED!]');
