<script setup lang="ts">
import TheFooter from '~/components/core/the-footer';
import TheHeader from '~/components/core/the-header';
</script>

<template>
	<div class="layout">
		<the-header />
		<nuxt-page />
		<the-footer />
		<client-only>
			<base-sticker />
		</client-only>
	</div>
</template>
