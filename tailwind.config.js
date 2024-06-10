/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
