import { copyFileSync } from 'fs';
import { join } from 'path';

// GitHub Pages serves 404.html for unknown paths, enabling client-side routing.
const dist = 'dist';
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'));
