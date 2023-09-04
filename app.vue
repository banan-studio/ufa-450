<script setup lang="ts">
const host = useHost();
</script>
<template>
	<Html lang="ru">
		<Link rel="manifest" :href="`${host}/manifest.webmanifest`" />
		<Link rel="icon" :href="`${host}/favicon.ico`" sizes="any" type="image/x-icon" />
		<Link rel="icon" :href="`${host}/icon.svg`" type="image/svg+xml`" />
		<Link rel="apple-touch-icon" :href="`${host}/apple-touch-icon.png`" />
		<Meta name="viewport" content="width=device-width, initial-scale=1" />
	</Html>
	<YandexVerification />
	<nuxt-layout />
</template>
