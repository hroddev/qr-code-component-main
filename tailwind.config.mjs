/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'blue': '#2C7DFA',
			'blue-shade': '#3685FF',
			'dark-navy':'#1F314F',
			'grey':'#7D889E',
			'light-grey':'#D5E1EF',
			'white':'#FFFFFF',
		},
		extend: {
			fontFamily:{
				
			}
		},
	},
	plugins: [],
}
