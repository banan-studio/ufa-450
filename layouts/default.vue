<script setup lang="ts">
import TheHeader from '~/components/core/the-header';
import TheFooter from '~/components/core/the-footer';
</script>

<template>
	<the-header />
	<nuxt-page />
	<the-footer />
	<client-only>
		<base-sticker />
	</client-only>
</template>
