import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use '/' for a custom domain or user/org pages (username.github.io).
// For project pages (username.github.io/repo-name), set base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
