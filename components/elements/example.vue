<script setup lang="ts">
import type { PropType } from 'vue';

import BasePicture from '~/components/elements/BasePicture';
import { bem } from '~/composables/bem';
import type { Example } from '~/stores/examples';

defineProps({
	example: {
		type: Object as PropType<Example>,
		required: true
	}
});
const { base, component } = bem('example');

const $video = templateRef<HTMLVideoElement>('$video');
const { stop } = useIntersectionObserver($video, ([entry]) => {
	if (entry.isIntersecting && $video.value.dataset.src) {
		$video.value.src = $video.value.dataset.src;
		$video.value.load();
		stop();
	}
});
</script>

<template>
	<article :class="base()">
		<div :class="component('cover')">
			<base-picture v-if="example.cover.type === 'images'" v-bind="example.cover" :alt="example.title" />

			<video
				v-if="example.cover.type === 'video'"
				ref="$video"
				autoplay
				loop
				playsinline
				muted
				:class="component('cover')"
				:data-src="example.cover.src"
				:width="example.cover.width"
				:height="example.cover.height"
				preload="none"
			/>
		</div>
		<p v-if="example.location" :class="component('location')">{{ example.location }}</p>
		<h3 :class="component('title')">
			<template v-if="example.link">
				<nuxt-link :href="example.link" target="_blank">{{ example.title }}</nuxt-link>
			</template>
			<template v-else>
				{{ example.title }}
			</template>
		</h3>
	</article>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.example {
	position: relative;
	display: grid;
	gap: #{utility.rem(8)};

	& &__title {
		color: var(--text-primary);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(32)};
		line-height: 125%; /* 40px */
		letter-spacing: #{utility.rem(-1.6)};

		a {
			text-decoration: none;

			&::after {
				content: '';
				position: absolute;
				inset: 0;
				border-radius: #{utility.rem(16)} #{utility.rem(16)} 0 0;
			}

			@include utility.has-hover {
				text-decoration: underline;
			}
		}
	}

	& &__location {
		color: var(--text-primary);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 145%; /* 26.1px */
		letter-spacing: #{utility.rem(-0.9)};
	}

	& &__cover {
		:deep(img),
		video {
			width: 100%;
			height: auto;
			margin-bottom: #{utility.rem(8)};
			border-radius: #{utility.rem(16)};
		}
	}

	@include breakpoints.media-down('xl') {
		& &__cover {
			:deep(img) {
				border-radius: #{utility.rem(12)};
			}
		}

		& &__title {
			color: var(--text-primary);
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 145%; /* 26.1px */
			letter-spacing: #{utility.rem(-0.9)};
		}

		& &__location {
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(16)};
			line-height: 145%;
			letter-spacing: #{utility.rem(-0.8)};
		}
	}
}
</style>
