<script setup lang="ts">
import { useHost } from '~/composables/useHost';
import SocialMeta from '~/components/utils/social-meta';
import SectionLive from '~/components/sections/section-live';
import SectionHero from '~/components/sections/section-hero';
import SectionCompetition from '~/components/sections/section-competition';

const host = useHost();

const cover = computed(() => `${host.value ?? ''}/images/cover.jpg`);
const canonical = computed(() => host.value);
</script>
<template>
	<social-meta
		title="450 лет Уфы / Логотип и фирменный стиль"
		description="Скачать в векторе: Корел (CDR), Иллюстратор (Ai), PNG (прозрачный), SVG. Посмотреть альбом фирменного стиля (PDF). Логотип празднования  450-летия Уфы."
		:cover="cover"
		:canonical="canonical"
	/>
	<section-hero />
	<section-live />
	<section-competition />
</template>
