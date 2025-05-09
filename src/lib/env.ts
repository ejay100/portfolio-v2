const requiredEnvVars = [
  'SENDGRID_API_KEY',
  'CONTACT_EMAIL',
];

const recommendedEnvVars = [
  'NEXT_PUBLIC_GA_ID',
  'NEXT_PUBLIC_LINKEDIN_URL',
  'NEXT_PUBLIC_GITHUB_URL',
];

function validateEnv() {
  let hasError = false;
  let hasWarning = false;

  // Check required environment variables
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      console.error(`❌ Required environment variable ${envVar} is not set`);
      hasError = true;
    }
  }

  // Check recommended environment variables
  for (const envVar of recommendedEnvVars) {
    if (!process.env[envVar]) {
      console.warn(`⚠️ Recommended environment variable ${envVar} is not set`);
      hasWarning = true;
    }
  }

  if (hasError) {
    throw new Error('Missing required environment variables');
  }

  if (hasWarning) {
    console.warn('Some recommended environment variables are missing');
  }
}

export { validateEnv };
