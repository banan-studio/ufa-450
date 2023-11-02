<script setup lang="ts">
import Logo from '~/components/core/logo';
import SrOnly from '~/components/utils/sr-only';
</script>

<template>
	<header class="header">
		<nuxt-link href="/" class="header__logo">
			<logo />
			<sr-only>Уфа 450 лет</sr-only>
		</nuxt-link>
	</header>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.header {
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: center;
	width: min(100%, var(--container));
	margin: 0 auto;
	padding: var(--padding-md) 0;

	& &__logo {
		svg {
			display: block;
			width: #{utility.rem(95)};
			height: #{utility.rem(64)};
		}
	}

	@include breakpoints.media-down('xl') {
		& &__logo {
			svg {
				width: #{utility.rem(66)};
				height: #{utility.rem(44)};
			}
		}
	}
}
</style>
