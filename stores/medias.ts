import { defineStore } from 'pinia';

import { type Image } from '~/types';

export const enum MediaType {
	Photo = 'photo',
	YouTube = 'youtube'
}

export interface MediaPhoto {
	type: MediaType.Photo;
	title: string;
	cover: Image;
}
export interface MediaYouTube {
	type: MediaType.YouTube;
	id: string;
	title: string;
	cover: Image;
}

export type Media = MediaPhoto | MediaYouTube;

export const useMediasStore = defineStore('medias', () => {
	const items = computed<Media[]>(() => {
		return [
			{
				type: MediaType.YouTube,
				cover: { src: '/images/17923.jpg', width: 1920, height: 1080, thumbhash: '1NcFDITnPjgziHYxU3CkLzb0Hw' },
				title: 'Выбран фирменный стиль уфы к юбилею',
				id: 'vfjusEk1AMI'
			},
			{
				type: MediaType.Photo,
				title: 'Диплом победителя конкурса',
				cover: { src: '/images/media/IMAGE.jpg', width: 1238, height: 840, thumbhash: '6CgGFYQveaV6iHh4eJeIavCWBW1J' }
			},
			{
				type: MediaType.Photo,
				title: 'Награждение победителей конкурса',
				cover: {
					// eslint-disable-next-line max-len
					src: '/images/media/pobediteli-konkursa-na-sozdanie-firmennogo-stilja-450-letija-ufy-udostoeny-nagrad.jpg',
					width: 1238,
					height: 528,
					thumbhash: 'IAgSC4Jql3V/d5em+Xh2r5k'
				}
			},
			{
				type: MediaType.YouTube,
				cover: { src: '/images/17922.jpg', width: 1920, height: 1080, thumbhash: 'WucJJIYDXGl2hoewWoipkKoKuA' },
				title: 'Итоги I этапа конкурса на создание фирстиля 450-летия Уфы',
				id: 'EKHmldzjhcI'
			}
		];
	});

	return { items };
});
