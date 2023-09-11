import { join } from 'path';

import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

import { customTheme } from './custom-theme';

// 1. Import the Skeleton plugin

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		forms,
		skeleton({
			themes: {
				custom: [customTheme]
			}
		})
	]
} satisfies Config;

export default config;