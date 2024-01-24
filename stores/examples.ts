import { defineStore } from 'pinia';

import { type Image } from '~/types';

export interface Example {
	cover: Image & { type: 'images' | 'video' };
	title: string;
	location?: string;
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
					height: 853,
					thumbhash: 'UBgKFYJeh3m/WneqVbdpmPJTBxpo'
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
					height: 1002,
					thumbhash: 'k+cJFYRZh5l/mIeGd4d3icqBvwv5'
				}
			},
			{
				title: 'Дизайн городских объектов для Уфы',
				location: 'Студия Артемия Лебедева',
				cover: {
					type: 'images',
					src: '/images/live/render.png',
					width: 618,
					height: 364,
					thumbhash: 'EQiOE4IPKWWEeHAniIByCIeHj4hw9wc'
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
					height: 500,
					thumbhash: 'UeeFDIIPIW2Yt4wImo83ql1wePiHCHePAA'
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
					height: 720,
					thumbhash: 'XBgGHoQ9mZZfeoiEiHd3iIaGv2b2moY'
				}
			},
			{
				title: 'Оформление кружки',
				cover: {
					type: 'images',
					src: '/images/live/IMG_0830.jpg',
					width: 1000,
					height: 1333,
					thumbhash: 'aRgKFQSLaJmH+GanhnVoh+ZwDG9V'
				}
			},
			{
				title: 'Цветочный ларёк',
				location: 'улица Айская',
				cover: {
					type: 'images',
					src: '/images/live/IMG_0739.jpg',
					width: 400,
					height: 300,
					thumbhash: 'YOcRDYKJl4iUZ3ifd4d4iJiGgHgI'
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
					height: 600,
					thumbhash: 'GRiKDYIPeUWNeGBHVp+a6PlXh4d/eHD3Bw'
				}
			},
			{
				title: 'Оформление центра печати',
				location: 'Бульвар Хадии Давлетшиной',
				cover: {
					type: 'images',
					src: '/images/live/IMG_0461.jpg',
					width: 400,
					height: 300,
					thumbhash: '5fcFDYB3iYmQiIhqiWeXZoy/u/hq'
				}
			},
			{
				title: 'Оформление фасада',

				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/bakery.png',
					width: 619,
					height: 600,
					thumbhash: 'qBiGFYQPVWZImW85qSiPUfQ2h4d7eHC3CA'
				}
			},
			{
				title: 'Республиканский конкурс детского рисунка',
				location: 'Интернет',
				cover: {
					type: 'images',
					src: '/images/live/picture-competition.jpg',
					width: 1527,
					height: 2160,
					thumbhash: 'bxgOHQRmdpiI93h4d3d4ZpB01QdW'
				}
			},
			{
				title: 'Оформление фасада',
				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/kiosk.png',
					width: 619,
					height: 364,
					thumbhash: 'HfiFA4AP31/JcmiPk5wMZIeHjohw1wc'
				}
			},
			{
				title: 'Оформление фасада',
				location: 'Улицы Уфы',
				cover: {
					type: 'images',
					src: '/images/live/doner.png',
					width: 619,
					height: 500,
					thumbhash: '3feJDIIPb2ZXdndouO/2mEB5eAh4B3eAAA'
				}
			}
		];
	});

	return { items };
});
