// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: {enabled: true},
	experimental: {
		payloadExtraction: false
	},
	modules: ['@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			Inter: [500]
		}
	}
});
