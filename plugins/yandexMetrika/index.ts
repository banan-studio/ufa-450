// @ts-nocheck
import { YandexMetrika } from './YandexMetrika';
import { defineNuxtPlugin, useRouter } from '#imports';

export default defineNuxtPlugin(() => {
	if (!process.client) {
		return {
			provide: { yandexMetrika: undefined }
		};
	}
	// @ts-expect-error
	const id = parseInt(import.meta.env.VITE_YANDEX_METRICA, 10);

	let ready = false;
	const router = useRouter();

	void router.isReady().then(() => {
		ready = true;
	});

	if (!process.dev) {
		/* eslint-disable */
		(function (m, e, t, r, i, k, a) {
			m[i] =
				m[i] ||
				function () {
					(m[i].a = m[i].a || []).push(arguments);
				};

			m[i].l = new Date().getTime();

			k = e.createElement(t);

			a = e.getElementsByTagName(t)[0];

			k.async = 1;

			k.src = r;
			setTimeout(() => {
				a.parentNode.insertBefore(k, a);
			}, 2400);
		})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
		/* eslint-enable */
		// @ts-check
	}

	const yandexMetrika = new YandexMetrika(id, {
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true,
		webvisor: true
	});

	router.afterEach((to, from) => {
		if (!ready) {
			return;
		}
		yandexMetrika.hit(to.fullPath, {
			referer: from.fullPath
		});
	});

	return {
		provide: {
			yandexMetrika
		}
	};
});

declare module '#app' {
	interface NuxtApp {
		$yandexMetrika: YandexMetrika | undefined;
	}
}
declare module 'vue' {
	interface ComponentCustomProperties {
		$yandexMetrika: YandexMetrika | undefined;
	}
}
