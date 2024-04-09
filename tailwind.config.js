/** @type {import('tailwindcss').Config} */

// Autoprefix automatically included
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	important: true,
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--gg-primary-color) / <alpha-value>)',
				secondary: 'rgb(var(--gg-secondary-color) / <alpha-value> )',
				accent: 'rgb(var(--gg-accent-color) / <alpha-value>)',
				default: 'var(--text-default)',
				muted: 'var(--text-muted)'
			},
			backgroundImage: {
				slide1: "url('./src/assets/images/vacuum-system.jpg')"
			},
			screens: {
				tab: '956px',
				smMob: '350px'
			}
		}
	},
	plugins: []
};
