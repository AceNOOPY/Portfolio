import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: false, // Disable SSR for static GitHub Pages deployment
	prerender: ['/'],
} satisfies Config;
