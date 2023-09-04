// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['assets/style/index.scss'],
	modules: [
		'@pinia/nuxt',
		'@vueuse/nuxt',
		'nuxt-simple-sitemap',
		'@nuxtjs/google-fonts',
		'@nuxt/image',
		'nuxt-gtag',
		'nuxt-simple-robots',
		'nuxt-yandex-metrika'
	],
	googleFonts: {
		families: {
			Inter: [500, 600]
		}
	},
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
	},
	yandexMetrika: {
		id: process.env.VITE_YANDEX_METRICA,
		delay: 3000,
		verification: process.env.VITE_YANDEX_VERIFICATION,
		options: {
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true
		}
	}
});
