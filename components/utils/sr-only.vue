<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	tag: {
		type: String as PropType<keyof HTMLElementTagNameMap>,
		default: 'span'
	}
});
</script>

<template>
	<component :is="tag" class="sr-only">
		<slot />
	</component>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';

.sr-only {
	@include utility.sr-only;
}
</style>
