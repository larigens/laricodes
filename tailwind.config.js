/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#F0E6F0',
				'secondary-light': '#f2cef2',
				'ternary-light': '#8A9DCB',

				'primary-dark': '#070214',
				'secondary-dark': '#7063B5',
				'ternary-dark': '#BF79A6',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
};

