<script setup lang="ts">
import TheFooter from '~/components/core/the-footer';
import TheHeader from '~/components/core/the-header';
</script>

<template>
	<div class="layout">
		<Body class="default-layout">
			<the-header />
			<nuxt-page />
			<the-footer />
			<client-only>
				<base-sticker />
			</client-only>
		</Body>
	</div>
</template>

<style>
body.default-layout {
	padding: 0 var(--ears);
}
</style>
