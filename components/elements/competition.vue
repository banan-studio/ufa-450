<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	title: {
		type: String as PropType<string>,
		required: true
	}
});
</script>

<template>
	<div class="competition">
		<h3>
			{{ title }}
			<slot name="svg" />
		</h3>
		<div>
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.competition {
	z-index: 1;
	display: grid;
	gap: #{utility.rem(16)};

	h3 {
		display: flex;
		gap: #{utility.rem(24)};
		align-items: center;
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(128)};
		line-height: 90%; /* 115.2px */
		letter-spacing: #{utility.rem(-10.24)};

		:deep(svg) {
			filter: drop-shadow(0 #{utility.rem(24)} #{utility.rem(42)} rgb(29 41 57 / 25%));
		}
	}

	:deep(p) {
		max-width: #{utility.rem(777)};
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 145%; /* 26.1px */
		letter-spacing: #{utility.rem(-0.9)};
	}

	:deep(p + p) {
		margin-top: #{utility.rem(26.1)};
	}

	@include breakpoints.media-down('xxl') {
		h3 {
			font-size: #{utility.rem(100)};

			:deep(svg) {
				display: none;
			}
		}

		:deep(p) {
			max-width: #{utility.rem(477)};
		}

		:deep(p + p) {
			margin-top: #{utility.rem(26.1)};
		}
	}

	@include breakpoints.media-down('xl') {
		h3 {
			position: relative;
			z-index: 1;
			font-size: #{utility.rem(54)};
			letter-spacing: #{utility.rem(-4.32)};
		}

		:deep(p) {
			max-width: unset;
		}
	}
}
</style>
