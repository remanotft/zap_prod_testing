import { Theme } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	app: {
		head: {
			script: [
				{
					src: 'https://widget.mybookingplatform.com/widget.js?v=1.0',
					type: 'text/javascript'
				},
				{
					innerHTML: `var widget = new SSTWidget({
							container: "SS-Widget",
							SiteUrl: "https://zaptravelandtours.mybookingplatform.com/",
							TabFontFamily: "Arial, Helvetica, sans-serif",
							Disable: {
								Hotel: false,
								Tour: true,
								Car: false,
								Activity: true,
								Cruise: true,
								Flight : false,
								Transfer : true
							},
							language:"en",
							SearchButtonbackground: "#DEA042",
							SearchButtonColor: "#fff"
						});

						widget.init();`,
					tagPosition: 'bodyClose'
				}
			]
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@sidebase/nuxt-auth',
		'@primevue/nuxt-module',
		'@pinia/nuxt'
	],
	primevue: {
		options: {
			theme: {
				preset: Aura,
				options: {
					prefix: 'p',
					darkModeSelector: false
				}
			}
		}
	},
	auth: {
		baseURL: process.env.AUTH_ORIGIN,
	}
})