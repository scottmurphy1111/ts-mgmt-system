/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const nesting = require('postcss-nesting');
const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		nesting(),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer()
	]
};

module.exports = config;
