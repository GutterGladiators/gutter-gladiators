export default {
	'*.{js,jsx,ts,tsx,astro}': ['eslint --fix', 'prettier --write'],
	'**/*.ts?(x)': () => 'npm run build',
	'*.json': ['prettier --write']
};
