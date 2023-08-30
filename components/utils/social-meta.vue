<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	title: {
		type: String as PropType<string>,
		required: true
	},
	description: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	},
	cover: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	},
	canonical: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	},
	template: {
		type: Boolean as PropType<boolean>,
		required: false,
		default: true
	}
});
</script>

<template>
	<Head>
		<Title>{{ title }}</Title>
		<Meta name="title" :content="title" />
		<Meta property="og:title" :content="title" />
		<Meta property="twitter:title" :content="title" />

		<template v-if="description">
			<Meta name="description" :content="description" />
			<Meta property="og:description" :content="description" />
			<Meta property="twitter:description" :content="description" />
		</template>

		<template v-if="cover">
			<Meta property="twitter:card" content="summary_large_image" />
			<Meta property="twitter:image" :content="cover" />
			<Meta property="og:image" :content="cover" />
			<Meta property="vk:image" :content="cover" />
		</template>
		<template v-if="canonical">
			<Link rel="canonical" :href="canonical" />
			<Meta property="canonical" :content="canonical" />
			<Meta property="og:url" :content="canonical" />
		</template>
	</Head>
</template>
