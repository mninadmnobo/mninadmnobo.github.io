import { execSync } from 'child_process';

try {
  console.log('[v0] Pulling latest changes from GitHub...');
  const result = execSync('cd /vercel/share/v0-project && git pull origin main', { encoding: 'utf-8' });
  console.log('[v0] Git pull result:', result);
  console.log('[v0] Git pull completed successfully');
} catch (error) {
  console.error('[v0] Error pulling from git:', error.message);
}
