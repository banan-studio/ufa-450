// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: {enabled: true},
	css: ["assets/style/index.scss"],
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
