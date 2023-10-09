<script setup lang="ts">
import SrOnly from '~/components/utils/sr-only';
const now = useNow();
const { reachGoal } = useYandexMetrika();

const image = computed<{ key: string; title: string }>(() => {
	if (now.value.getHours() < 6) {
		return { key: 'good-night', title: 'Доброй ночи' };
	} else if (now.value.getHours() < 12) {
		return { key: 'good-morning', title: 'Доброе утро' };
	} else if (now.value.getHours() < 17) {
		return { key: 'good-day', title: 'Добрый день' };
	} else {
		return { key: 'good-evening', title: 'Добрый вечер' };
	}
});
const show = useState(() => false);
useTimeoutFn(() => {
	show.value = true;
}, 3 * 1000);

function onClick() {
	show.value = false;
	reachGoal('stickers', {});
}
</script>

<template>
	<teleport to="body">
		<sr-only>Стикеры 450 лет Уфе</sr-only>
		<transition name="fade">
			<nuxt-link
				v-show="show"
				class="stickers"
				href="https://t.me/addstickers/ufa_450"
				target="_blank"
				@click="onClick"
			>
				<img loading="lazy" :alt="image.title" :height="128" :width="128" :src="`/images/stickers/${image.key}.png`" />
			</nuxt-link>
		</transition>
	</teleport>
</template>

<style scoped lang="scss">
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.stickers {
	position: fixed;
	right: var(--ears);
	bottom: var(--ears);
	z-index: 10;
	width: #{utility.rem(128)};
	height: #{utility.rem(128)};
	box-shadow: 0 #{utility.rem(16)} #{utility.rem(24)} 0 rgb(77 177 120 / 12%);
	transition: all 0.5s ease;

	img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: #{utility.rem(8)};
	}

	@include utility.has-hover {
		transform: scale(1.05);
	}

	@include breakpoints.media-down('xl') {
		width: #{utility.rem(64)};
		height: #{utility.rem(64)};

		img {
			border-radius: #{utility.rem(4)};
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s ease;
	transform: translateY(0%);
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(100%);
}
</style>
