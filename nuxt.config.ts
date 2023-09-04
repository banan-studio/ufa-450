// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: true },
	css: ['assets/style/index.scss'],
	experimental: {
		payloadExtraction: false
	},
	modules: ['@pinia/nuxt', '@vueuse/nuxt', 'nuxt-simple-sitemap', '@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-gtag', 'nuxt-simple-robots'],
	googleFonts: {
		families: {
			Inter: [500, 600]
		}
	},
	plugins: [{ src: '~/plugins/yandexMetrika/index.ts', mode: 'client' }],
	sitemap: {
		siteUrl: process.env.VITE_SITE
	},
	postcss: {
		plugins: {
			'postcss-preset-env': {
				autoprefixer: {}
			}
		}
	},
	gtag: {
		id: process.env.VITE_GTAG
	}
});
