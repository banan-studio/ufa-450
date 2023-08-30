<script setup lang="ts">
import { useExamplesStore } from '~/stores/examples';
import Example from '~/components/elements/example';
import TheSection from '~/components/core/the-section';

const examplesStore = useExamplesStore();
</script>

<template>
	<the-section :title="['Фирменный стиль', 'в жизни']" class="section-live">
		<div class="section-live-content">
			<example v-for="(item, index) in examplesStore.items" :key="index" :example="item" />
		</div>
		<template #outside>
			<div class="section-live__pattern">
				<svg
					class="up-xxl"
					xmlns="http://www.w3.org/2000/svg"
					width="2200"
					height="870"
					fill="none"
					viewBox="0 0 2200 870"
				>
					<path
						stroke="var(--yellow)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="m2039.69 22.567-184.13 266.216 266.22 184.126"
					/>
					<path
						stroke="var(--mint)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="m125.161 836.88 184.125-266.22-266.22-184.123"
					/>
					<path
						stroke="var(--blue)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="M1814.52 63.613 1630.4 329.83l266.21 184.125"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="m1373.25 144.053 266.22 184.123-184.13 266.22"
					/>
					<path
						stroke="var(--mint)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="M692.478 268.154 508.353 534.371l266.22 184.125"
					/>
					<path
						stroke="var(--yellow)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="m251.206 348.595 266.217 184.123-184.122 266.219m690.119-591.112L839.3 474.042l266.22 184.125M839.379 474.464l-26.399 38.169A47.38 47.38 0 0 1 782.5 532.3a47.402 47.402 0 0 1-48.325-20.931 47.4 47.4 0 0 1 .844-52.656l-.432.626a47.394 47.394 0 0 1 65.94-12.021l38.852 27.146Z"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="m1032.47 206.176 266.22 184.123-184.13 266.219"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="43.576"
						d="m1293.86 390.743 26.4-38.169a47.402 47.402 0 0 1 13.29-12.865 47.375 47.375 0 0 1 35.68-6.506 47.37 47.37 0 0 1 16.97 7.35 47.484 47.484 0 0 1 12.87 13.285 47.532 47.532 0 0 1 6.8 17.196 47.169 47.169 0 0 1-.3 18.49 47.373 47.373 0 0 1-7.35 16.97l.44-.626a47.402 47.402 0 0 1-13.29 12.865 47.375 47.375 0 0 1-35.69 6.506 47.323 47.323 0 0 1-16.96-7.35l-38.86-27.146Z"
					/>
				</svg>

				<svg
					class="up-xl"
					xmlns="http://www.w3.org/2000/svg"
					width="1630"
					height="680"
					fill="none"
					viewBox="0 0 1630 680"
				>
					<path
						stroke="var(--yellow)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m1460.44 64.388-129.42 187.127 187.12 129.423"
					/>
					<path
						stroke="var(--mint)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m114.705 636.776 129.423-187.129L57 320.226"
					/>
					<path
						stroke="var(--blue)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m1302.17 93.24-129.42 187.127 187.12 129.423"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m991.996 149.782 187.124 129.421-129.42 187.129"
					/>
					<path
						stroke="var(--mint)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="M513.477 237.014 384.053 424.14l187.129 129.423"
					/>
					<path
						stroke="var(--yellow)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m203.303 293.556 187.126 129.422-129.421 187.128M746.1 194.608 616.678 381.734l187.127 129.423M616.736 382.031 598.18 408.86a33.296 33.296 0 0 1-21.425 13.824 33.31 33.31 0 0 1-38.749-26.799 33.33 33.33 0 0 1 5.375-24.925l-.304.439a33.326 33.326 0 0 1 21.425-13.824 33.31 33.31 0 0 1 24.925 5.375l27.309 19.081Z"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m752.461 193.449 187.126 129.422-129.421 187.128"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="30.63"
						d="m936.195 323.182 18.556-26.829a33.326 33.326 0 0 1 21.425-13.824 33.31 33.31 0 0 1 33.964 14.712c2.38 3.676 4 7.784 4.79 12.088.78 4.304.71 8.72-.21 12.997a33.434 33.434 0 0 1-5.17 11.927l.3-.439a33.257 33.257 0 0 1-21.421 13.824 33.31 33.31 0 0 1-24.925-5.375l-27.309-19.081Z"
					/>
				</svg>

				<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="390" fill="none" viewBox="0 0 1050 390">
					<path
						stroke="var(--yellow)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m1001.45 52-68.742 99.394 99.392 68.745"
					/>
					<path
						stroke="var(--mint)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m286.651 356.029 68.744-99.395L256 187.891"
					/>
					<path
						stroke="var(--blue)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="M917.383 67.325 848.64 166.72l99.394 68.745"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m752.633 97.358 99.395 68.743-68.745 99.395"
					/>
					<path
						stroke="var(--mint)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m498.462 143.692-68.744 99.394 99.395 68.744"
					/>
					<path
						stroke="var(--yellow)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m333.711 173.725 99.394 68.743-68.743 99.395m257.66-220.696-68.744 99.394 99.394 68.745m-99.363-68.587-9.856 14.251a17.697 17.697 0 0 1-31.962-6.892 17.69 17.69 0 0 1 2.855-13.239l-.162.233a17.71 17.71 0 0 1 11.38-7.343 17.709 17.709 0 0 1 13.24 2.855l14.505 10.135Z"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m625.4 120.552 99.394 68.743-68.743 99.395"
					/>
					<path
						stroke="var(--lilac)"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="16.27"
						d="m722.994 189.461 9.856-14.251a17.697 17.697 0 0 1 31.962 6.892 17.69 17.69 0 0 1-2.855 13.239l.162-.233a17.697 17.697 0 0 1-24.62 4.488l-14.505-10.135Z"
					/>
				</svg>
			</div>
		</template>
	</the-section>
</template>

<style lang="scss" scoped>
@use 'assets/style/utility';
@use 'assets/style/breakpoints';

.section-live {
	position: relative;
	overflow: hidden;
	margin: 0 calc(var(--ears) * -1);
	padding: 0 var(--ears);

	& &__pattern {
		position: absolute;
		top: 0;
		left: 50%;
		display: block;
		pointer-events: none;
		transform: translateX(-50%);

		svg {
			display: block;
		}

		svg:not(:is(.up-xxl, .up-xl)) {
			width: #{utility.rem(1050)};
			height: #{utility.rem(390)};
		}

		> svg:is(.up-xxl, .up-xl) {
			display: none;
		}

		@include breakpoints.media-up('xl') {
			svg:is(.up-xl) {
				display: block;
			}

			svg:not(.up-xl) {
				display: none;
			}
		}

		@include breakpoints.media-up('xxl') {
			top: #{utility.rem(-6-16)};

			svg:is(.up-xxl) {
				display: block;
			}

			svg:not(.up-xxl) {
				display: none;
			}
		}

		//@include breakpoints.media-down('xxl') {
		//  svg.xl {
		//    display: block;
		//  }
		//}
	}
}

.section-live-content {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: #{utility.rem(140)} #{utility.rem(16)};
	align-items: start;
	padding-bottom: #{utility.rem(150)};

	@include breakpoints.media-down('xxl') {
		gap: #{utility.rem(88)} #{utility.rem(16)};
	}

	@include breakpoints.media-down('xl') {
		grid-template-columns: 1fr;
		gap: #{utility.rem(24)};
	}

	:deep(.example) {
		z-index: 2;
	}
}
</style>
