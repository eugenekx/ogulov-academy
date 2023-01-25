/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			'yellow': '#fbbb21',
		},
		extend: {
			fontFamily:{
				mabry: ['Mabry Pro', 'sans-serif'],
				proxima: ['Proxima Nova', 'sans-serif'],
			},
			fontSize:{
				s: '14px',
				m: '18px',
				l: '24px',
				xl: '28px',
				'2xl':'36px',
				'3xl': '48px',
			},
		},
	},
	plugins: [],
};
