import { Theme } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: [
		'~/assets/scss/tailwind.scss',
		 '@/assets/libs/@mdi/font/css/materialdesignicons.min.css'
	],
	app: {
		head: {
			title: 'ZAP Travel & Tours',
			titleTemplate: 'ZAP Travel & Tours',
			htmlAttrs: { class: "light scroll-smooth", dir: "ltr", lang: 'en' },
			bodyAttrs: {
				class: 'dark:bg-slate-900',
			},
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
				},
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
			],

			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css',
				}
			],
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