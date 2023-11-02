<script setup lang="ts">
import type { PropType } from 'vue';

import { useSignal } from '#imports';
import SrOnly from '~/components/utils/sr-only';

defineProps({
	cover: {
		type: Object as PropType<{ src: string; width: number; height: number }>,
		required: true
	},
	id: {
		type: String as PropType<string>,
		required: true
	},
	title: {
		type: String as PropType<string>,
		required: true
	}
});

const [active, setActive] = useSignal(false);
</script>

<template>
	<div class="youtube">
		<template v-if="!active">
			<nuxt-picture v-bind="cover" :alt="title" loading="lazy" class="youtube__cover" />
			<a target="_blank" :href="`https://youtu.be/${id}`" @click.prevent.stop="setActive(true)">
				<sr-only> {{ title }}</sr-only>
			</a>
			<div class="youtube__play">
				<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M70.5268 40.8366C65.1966 37.5565 58.334 41.3913 58.334 47.6499V152.35C58.334 158.609 65.1966 162.444 70.5268 159.163L155.596 106.813C160.672 103.689 160.672 96.3107 155.596 93.1868L70.5268 40.8366Z"
						fill="white"
						stroke="white"
						stroke-width="8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</template>
		<iframe
			v-else
			:width="cover.width"
			:height="cover.height"
			:style="{ aspectRatio: cover.width / cover.height }"
			:src="`https://www.youtube.com/embed/${id}?autoplay=1`"
			:title="title"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/focus-visible';
@use 'assets/style/breakpoints';

.youtube {
	$self: &;

	--focus-visible: var(--yellow);

	position: relative;

	&__cover {
		:deep(img) {
			display: block;
			width: 100%;
			height: auto;

			// border-radius: #{utility.rem(16)};
		}
	}

	> a {
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			display: block;
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
	}

	a:focus-visible + &__play {
		@include focus-visible.active;
	}

	& &__play {
		@include focus-visible.setup;

		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: #{utility.rem(100)};
		border: 1px solid rgb(255 255 255 / 64%);
		border-radius: #{utility.rem(1000)};
		background: rgb(255 255 255 / 8%);
		pointer-events: none;
		transition:
			background-color 200ms ease-in-out,
			box-shadow 200ms ease-in-out,
			border-color 200ms ease-in-out;
		transform: translate3d(-50%, -50%, 0);
		aspect-ratio: 1/1;
		backdrop-filter: blur(20px);

		> svg {
			width: #{utility.rem(50)};
		}

		@include breakpoints.media-down('xl') {
			width: #{utility.rem(50)};

			> svg {
				width: #{utility.rem(25)};
			}
		}
	}

	> iframe {
		display: block;
		width: 100%;
		height: auto;
		border: 0;
	}

	@include utility.has-hover {
		#{$self}__play {
			background: #1d2939;
			box-shadow: 0 #{utility.rem(24)} #{utility.rem(64)} 0 rgb(29 41 57 / 32%);

			// border-color: #1D2939;
		}
	}
}
</style>
