import { defineStore } from 'pinia';
import { type Image } from '~/types';

export interface Example {
	cover: Image & { type: 'images' | 'video' };
	title: string;
	location: string;
	link?: string;
}

export const useExamplesStore = defineStore('examples', () => {
	const items = computed<Example[]>(() => {
		return [
			{
				title: 'О новом граффити сообщил глава Орджоникидзевского района Альберт Маликов',
				location: 'Орджоникидзевский райнон, г. Уфа',
				cover: {
					type: 'images',
					src: '/images/live/graffiti.jpg',
					width: 1280,
					height: 853
				},

				link: 'https://t.me/c/1392467709/77369'
			},
			{
				title: 'Форум «Россия — исламский мир»',
				location: 'Казань',
				link: 'https://www.bashinform.ru/news/economy/2023-05-18/v-kazani-na-forume-rossiya-islamskiy-mir-prezentovali-investitsionnye-vozmozhnosti-bashkortostana-3263854',
				cover: {
					type: 'images',
					src: '/images/live/YAR03792.JPG',
					width: 1500,
					height: 1002
				}
			},
			{
				title: 'Дизайн городских объектов для Уфы',
				location: 'Студия Артемия Лебедева',
				cover: {
					type: 'images',
					src: '/images/live/render.png',
					width: 618,
					height: 364
				},

				link: 'https://www.artlebedev.ru/ufa/urban-objects/'
			},
			{
				title: 'День города Уфы в парке Кашкадан',
				location: 'Октябрьский район. Озеро Кашкадан',
				cover: {
					type: 'images',
					src: '/images/live/balloon.png',
					width: 619,
					height: 500
				},
				link: 'https://vk.com/video4532602_456239034'
			},
			{
				title: 'Реклама "Театр кукол"',
				location: 'Улицы Уфы',
				cover: {
					type: 'video',
					src: '/images/live/IMG_0875.mp4',
					width: 720,
					height: 700
				}
			},
			{
				title: 'Оформление фасада',
				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/IMG_9718.jpg',
					width: 900,
					height: 720
				}
			},
			{
				title: 'Парк Семейный',
				location: 'Набережная р. Белая',
				cover: {
					type: 'images',
					src: '/images/live/family-park.png',
					// src: '/images/live/doner.png',
					width: 619,
					height: 600
				}
			},
			{
				title: 'Оформление фасада',

				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/bakery.png',
					width: 619,
					height: 600
				}
			},
			{
				title: 'Оформление фасада',

				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/kiosk.png',
					width: 619,
					height: 364
				}
			},
			{
				title: 'Оформление фасада',
				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/doner.png',
					width: 619,
					height: 500
				}
			}
		];
	});

	return { items };
});
