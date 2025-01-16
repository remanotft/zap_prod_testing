/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		screens: {
			xs: "540px",
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '12px',
				sm: '1rem',
				lg: '45px',
				xl: '5rem',
				'2xl': '13rem',
			},
  
		},

		fontFamily: {
			'dm_sans': ['"DM Sans", sans-serif'],
			'dancing': ['"Dancing Script", cursive'],
			'roboto-flex': ['"Roboto Flex", sans-serif'],
			'open-sans': ['"Open Sans", sans-serif']
		},

		extend: {
			backgroundImage: {
				'hero': "url('https://zap-travel-website.s3.af-south-1.amazonaws.com/assets/zap_hero_2.jpg')",
			  },

			screens: {
				lg_992: '992px',
			},
			colors: {
				'dark': '#3c4858',
				'black': '#161c2d',
				'dark-footer': '#161c28',
				'zap-orange': '#e48c24', //RGB(228 140 36)
				'zap-blue': '#0a4268', //RGB(10 66 104)
				'zap-blue-text': '#084268' 
			},
  
			boxShadow: {
				sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
				DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
				md: '0 5px 13px rgb(60 72 88 / 0.20)',
				lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
				xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
				'2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
				inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
				testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
			},
  
			fontSize: {
				base: ['16px', '28px'],
				lg: ['18px', '28px'],
			},
  
			spacing: {
				0.75: '0.1875rem',
				3.25: '0.8125rem'
			},
  
			height: ({
				theme
			}) => ({
				'10.5': '2.625rem',
				'85': '21.25rem',
			}),
			width: ({
				theme
			}) => ({
				'10.5': '2.625rem',
			}),
  
			maxWidth: ({
				theme,
				breakpoints
			}) => ({
				'1200': '71.25rem',
				'992': '60rem',
				'768': '45rem',
			}),
  
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				999: '999',
			},
		},
	},
  plugins: [],
}

