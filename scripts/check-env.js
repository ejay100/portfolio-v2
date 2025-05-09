#!/usr/bin/env node

import { validateEnv } from '../src/lib/env';

try {
  validateEnv();
  console.log('✅ Environment validation passed');
  process.exit(0);
} catch (error) {
  console.error('❌ Environment validation failed:', error.message);
  process.exit(1);
}
