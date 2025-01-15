import { Theme } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth', '@primevue/nuxt-module'],
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