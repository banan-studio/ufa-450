<script setup lang="ts">
import { useAppStore } from '~/stores/apps';

const { reachGoal } = useYandexMetrika();
const appStore = useAppStore();
</script>

<template>
	<nuxt-link
		class="presentation"
		:href="appStore.style.link"
		target="_blank"
		@click="reachGoal(appStore.style.key, {})"
	>
		<div>Презентация<span>PDF</span></div>
		<div>фирменного стиля</div>
	</nuxt-link>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.presentation {
	--focus-visible: var(--yellow);

	display: grid;
	flex-shrink: 0;
	gap: #{utility.rem(10)};
	place-content: center center;
	align-items: center;
	height: 100%;
	padding: #{utility.rem(24)} #{utility.rem(32)};
	border: 1px solid rgb(255 255 255 / 16%);
	border-radius: #{utility.rem(16)};
	background: rgb(255 255 255 / 8%);
	color: #fff;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(64)};
	line-height: 90%; /* 57.6px */
	letter-spacing: #{utility.rem(-5.12)};
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	backdrop-filter: blur(20px);

	span {
		display: inline-flex;
		gap: #{utility.rem(10)};
		justify-content: center;
		align-items: center;
		padding: #{utility.rem(16)};
		border-radius: #{utility.rem(1000)};
		background-color: #fff;
		color: var(--green);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 90%; /* 21.6px */
		letter-spacing: #{utility.rem(-1.92)};
		text-align: center;
		text-transform: uppercase;
	}

	> div {
		display: flex;
		gap: #{utility.rem(10)};
		place-content: center center;
		align-items: center;
	}

	@include utility.has-hover {
		text-decoration: underline;
	}

	@include breakpoints.media-down('xxl') {
		font-size: #{utility.rem(48)};
		letter-spacing: #{utility.rem(-3.84)};

		span {
			font-size: #{utility.rem(20)};
			letter-spacing: #{utility.rem(-1.6)};
		}
	}

	@include breakpoints.media-down('xl') {
		gap: #{utility.rem(4)};
		padding: 0;
		font-size: #{utility.rem(24)};
		letter-spacing: #{utility.rem(-1.92)};
		aspect-ratio: 1/1;

		> div {
			gap: #{utility.rem(8)};
		}

		span {
			padding: #{utility.rem(8)};
			font-size: #{utility.rem(16)};
			letter-spacing: #{utility.rem(-1.28)};
		}
	}
}
</style>
