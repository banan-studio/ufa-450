<script setup lang="ts">
import type { PropType } from 'vue';

import Youtube from '~/components/elements/youtube';
import { bem } from '~/composables/bem';
import type { Media } from '~/stores/medias';
import { MediaType } from '~/stores/medias';

defineProps({
	media: {
		type: Object as PropType<Media>,
		required: true
	}
});

const { base } = bem('media');
</script>

<template>
	<div :class="base()">
		<youtube v-if="media.type === MediaType.YouTube" v-bind="media" />
		<nuxt-picture v-if="media.type === MediaType.Photo" loading="lazy" :alt="media.title" v-bind="media.cover" />
	</div>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.media {
	overflow: hidden;
	border-radius: #{utility.rem(16)};

	:deep(img),
	:deep(.youtube) {
		display: block;
	}

	:deep(img) {
		object-fit: cover;
		width: 100%;
		height: auto;
	}

	@include breakpoints.media-down('xl') {
		border-radius: #{utility.rem(12)};
	}
}
</style>
