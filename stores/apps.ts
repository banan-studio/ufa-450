import { defineStore } from 'pinia';
import { computed } from '#imports';

interface Link {
	key: string;
	title: string;
	link: string;
	badge?: string;
}

export const useAppStore = defineStore('app', function () {
	const logo: Link = {
		key: 'logo',
		title: 'Логотип',
		link: 'https://disk.yandex.ru/d/bP-G5sNTOYbT4g'
	};
	const style = computed<Link>(() => ({
		key: 'style',
		title: 'Фирменный стиль',
		badge: 'PDF',
		link: 'https://disk.yandex.ru/d/3VQ2L52CU9dGkA'
	}));

	return { logo, style };
});
