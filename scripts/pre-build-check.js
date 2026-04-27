#!/usr/bin/env node

// Pre-build validation script
const fs = require('fs');
const path = require('path');

console.log('🔍 Running pre-build checks...\n');

// Check required environment variables
const requiredEnvVars = [
  'CLERK_PUBLISHABLE_KEY',
  'CLERK_SECRET_KEY',
  'NEXT_PUBLIC_CLERK_SIGN_IN_URL',
  'NEXT_PUBLIC_CLERK_SIGN_UP_URL'
];

let envChecksPassed = true;

console.log('📋 Checking environment variables...');
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing environment variable: ${envVar}`);
    envChecksPassed = false;
  } else {
    console.log(`✅ ${envVar} is set`);
  }
});

// Check if critical files exist
const criticalFiles = [
  'app/layout.js',
  'app/page.js',
  'next.config.mjs',
  'package.json'
];

console.log('\n📁 Checking critical files...');
criticalFiles.forEach(file => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ Missing critical file: ${file}`);
    envChecksPassed = false;
  }
});

// Check for console.log in production files
console.log('\n🧹 Checking for console.log statements...');
const directoriesToCheck = ['app', 'components', 'lib'];
const consoleLogPattern = /console\.(log|error|warn|debug)/;

let foundConsoleStatements = false;

function checkDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      checkDirectory(fullPath);
    } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        if (consoleLogPattern.test(line) && !line.trim().startsWith('//')) {
          console.error(`❌ Console statement found in ${fullPath}:${index + 1}`);
          foundConsoleStatements = true;
        }
      });
    }
  });
}

directoriesToCheck.forEach(checkDirectory);

if (!foundConsoleStatements) {
  console.log('✅ No console statements found');
}

// Final result
console.log('\n📊 Pre-build check summary:');
if (envChecksPassed && !foundConsoleStatements) {
  console.log('✅ All checks passed! Ready for build.');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please fix the issues before building.');
  process.exit(1);
}
