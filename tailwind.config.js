/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily:{
				mabry: ['Mabry Pro', 'sans-serif'],
				proxima: ['Proxima Nova', 'sans-serif'],
			},
			fontSize:{
				xs: '10px',
				s: '14px',
				m: '18px',
				l: '24px',
				xl: '28px',
				'2xl':'36px',
				'3xl': '48px',
			},
			spacing: {
				'21': '5.25rem',
				'75': '18.75rem',
				'104': '26rem',
				'120': '30rem', 
				'140': '35rem',
				'183': '45.75rem',
				'232': '58rem',
			  },
			  colors: {
				'yellow': '#fbbb21',
			}
		},
	},
	plugins: [],
};
