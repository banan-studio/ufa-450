<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
	title: {
		type: [String, Array] as PropType<string | string[]>,
		required: true
	},
	titleTag: {
		type: String as PropType<keyof HTMLElementDeprecatedTagNameMap>,
		required: false,
		default() {
			return 'h2';
		}
	}
});
const titles = computed<string[]>(() => {
	if (props.title) {
		return Array.isArray(props.title) ? props.title : [props.title];
	}
	return [];
});
</script>

<template>
	<section class="section">
		<div class="section-container">
			<component :is="titleTag" class="section-title">
				<template v-for="(item, index) in titles">
					{{ item }}<br v-if="titles.length - 1 > index" :key="index" />
				</template>
			</component>
			<slot />
		</div>
		<slot name="outside" />
	</section>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.section {
	margin: 0 calc(var(--ears) * -1);
	padding: 0 var(--ears);

	& &-container {
		width: min(100%, var(--container));
		margin: 0 auto;
	}

	&-title {
		margin-top: #{utility.rem(16)};
		margin-bottom: #{utility.rem(150)};
		padding: 0;
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(164)};
		line-height: 90%; /* 147.6px */
		letter-spacing: #{utility.rem(-13.12)};
		text-transform: uppercase;

		@include breakpoints.media-down('xxl') {
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(124)};
			line-height: 90%; /* 111.6px */
			letter-spacing: #{utility.rem(-9.92)};
		}

		@include breakpoints.media-down('xl') {
			margin-bottom: #{utility.rem(100)};
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(52)};
			line-height: 90%; /* 46.8px */
			letter-spacing: #{utility.rem(-4.16)};
		}
	}
}
</style>
