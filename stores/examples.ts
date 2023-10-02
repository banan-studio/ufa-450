import { defineStore } from 'pinia';
import { type Image } from '~/types';

export interface Example {
	cover: Image;
	title: string;
	location: string;
	link?: string;
}

export const useExamplesStore = defineStore('examples', () => {
	const items = computed<Example[]>(() => {
		return [
			{
				title: 'День города Уфы в парке Кашкадан',
				location: 'Октябрьский район. Озеро Кашкадан',
				cover: {
					src: '/images/live/balloon.png',
					width: 619,
					height: 500
				},
				link: 'https://vk.com/video4532602_456239034'
			},
			{
				title: 'Дизайн городских объектов для Уфы',
				location: 'Студия Артемия Лебедева',
				cover: {
					src: '/images/live/render.png',
					width: 618,
					height: 364
				},

				link: 'https://www.artlebedev.ru/ufa/urban-objects/'
			},
			{
				title: 'Парк Семейный',
				location: 'Набережная р. Белая',
				cover: {
					src: '/images/live/family-park.png',
					// src: '/images/live/doner.png',
					width: 619,
					height: 600
				}
			},
			{
				title: 'Форум «Россия — исламский мир»',
				location: 'Казань',
				link: 'https://www.bashinform.ru/news/economy/2023-05-18/v-kazani-na-forume-rossiya-islamskiy-mir-prezentovali-investitsionnye-vozmozhnosti-bashkortostana-3263854',
				cover: {
					src: '/images/live/YAR03792.JPG',
					width: 1500,
					height: 1002
				}
			},
			{
				title: 'Оформление фасада',

				location: 'Улицы Уфы',
				cover: {
					src: '/images/live/bakery.png',
					width: 619,
					height: 600
				}
			},
			{
				title: 'Оформление фасада',

				location: 'Улицы Уфы',
				cover: {
					src: '/images/live/kiosk.png',
					width: 619,
					height: 364
				}
			},
			{
				title: 'Оформление фасада',
				location: 'Улицы Уфы',
				cover: {
					src: '/images/live/doner.png',
					width: 619,
					height: 500
				}
			}
		];
	});

	return { items };
});
