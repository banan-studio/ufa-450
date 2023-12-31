<template>
	<picture :class="[ns.base(), ns.is('loading', isLoading)]">
		<source
			v-for="(item, i) in sources"
			:key="i"
			:srcset="item.srcset"
			:type="item.type"
			:sizes="isVisible ? item.sizes : undefined"
		/>

		<img
			ref="$element"
			:src="placeholder"
			:width="width"
			:height="height"
			:alt="alt"
			:data-loading="isLoading"
			:loading="preload ? 'eager' : 'lazy'"
			@load="onLoad"
		/>
		<template v-if="preload">
			<Link
				rel="preload"
				as="image"
				:imagesizes="preloadSources.imagesizes"
				:imagesrcset="preloadSources.imagesrcset"
			/>
		</template>
	</picture>
</template>

<script lang="ts" setup>
import { templateRef } from '@vueuse/core';
import type { PropType, Ref } from 'vue';
import { onMounted, readonly } from 'vue';

import { computed, nextTick, ref, watch } from '#imports';
import { bem } from '~/composables/bem';
import { useNuxtImage } from '~/composables/useNuxtImage';
import { useSignal } from '~/composables/useSignal';
import { useVisible } from '~/composables/useVisible';

const props = defineProps({
	src: {
		type: String as PropType<string>,
		required: true
	},
	width: {
		type: Number as PropType<number>,
		required: true,
		default(this: void) {
			throw new Error('Не указана ширина изображения');
		}
	},
	height: {
		type: [Number, String] as PropType<number | string>,
		required: true,
		default(this: void) {
			throw new Error('Не указана высота изображения');
		}
	},
	alt: {
		type: String as PropType<string>,
		required: true,
		default(this: void) {
			throw new Error('Не указано описание изображения');
		}
	},
	preload: {
		type: Boolean as PropType<boolean>,
		required: false,
		default: false
	}
});

function getFileExtension(url: string) {
	return url.split(/[?#]/).shift()!.split('/').pop()!.split('.').pop()!;
}

const ns = bem('picture');

const originalFormat = computed(() => getFileExtension(props.src));
const format = computed(() => (originalFormat.value === 'svg' ? 'svg' : 'webp'));

function onLoad() {
	if (isVisible.value) {
		setIsLoading(false);
	}
}

const $img = useNuxtImage();
const $element = templateRef<HTMLImageElement>('$element');
const [isLoading, setIsLoading] = useSignal(true);
let isVisible: Ref<boolean>;

if (props.preload) {
	isVisible = readonly(ref(true));
	setIsLoading(false);
} else {
	isVisible = useVisible($element, {
		once: true
	});
}

const placeholder = computed(() =>
	$img(props.src, { quality: 1, width: 100, height: 100, fit: 'cover', format: 'webp' })
);

type Source = { srcset: string; src?: string; type?: string; sizes?: string };
const sources = computed<Source[]>(() => {
	if (format.value === 'svg') {
		return [{ srcset: props.src }];
	}
	const formats = [format.value];

	return formats.map((format) => {
		const { srcset, sizes, src } = $img.getSizes(props.src, {
			sizes: $img.options.screens,
			modifiers: {
				quality: 90,
				format
			}
		});

		return { srcset, sizes, src };
	});
});
const preloadSources = computed(() => {
	const srcKey = sources.value[1] ? 1 : 0;
	const source = sources.value[srcKey];
	const imagesizes = source?.sizes;
	const imagesrcset = source?.srcset;

	return { imagesizes, imagesrcset };
});

function check() {
	nextTick(() => {
		if (isVisible.value && $element.value && $element.value.complete) {
			setIsLoading(false);
		}
	});
}

watch(
	() => props.src,
	() => {
		setIsLoading(true);
	}
);
onMounted(() => {
	check();
});
watch(isVisible, () => {
	check();
});
</script>
<style lang="scss">
.picture {
	$self: &;

	display: block;
	overflow: hidden;
	background-position: center;
	background-size: 44px;
	background-repeat: no-repeat;

	& img {
		display: block;
		filter: blur(0);
		transition:
			filter var(--transition-animation),
			transform var(--transition-animation);
		transform: scale(1);
	}

	&#{$self}--is-loading {
		& > img {
			filter: blur(10px);
			transform: scale(1.2);
		}
	}
}
</style>
