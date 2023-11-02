<script setup lang="ts">
import SectionCompetition from '~/components/sections/section-competition';
import SectionHero from '~/components/sections/section-hero';
import SectionLive from '~/components/sections/section-live';
import SocialMeta from '~/components/utils/social-meta';
import { useHost } from '~/composables/useHost';

const host = useHost();

const cover = computed(() => `${host.value ?? ''}/images/cover.jpg`);
const canonical = computed(() => host.value);
</script>
<template>
	<div class="page">
		<social-meta
			title="450 лет Уфы / Логотип и фирменный стиль"
			description="Скачать в векторе: Корел (CDR), Иллюстратор (Ai), PNG (прозрачный), SVG. Посмотреть альбом фирменного стиля (PDF). Логотип празднования  450-летия Уфы."
			:cover="cover"
			:canonical="canonical"
		/>
		<section-hero />
		<section-live />
		<section-competition />
	</div>
</template>
