<script setup lang="js">
import { useI18n } from "vue-i18n";
import { Artwork } from "@/art-inventory/domain/model/artwork.entity.js";

const { t } = useI18n();
const { artwork } = defineProps({
  artwork: { type: Artwork, required: true }
});
const openDetails = () => {
  window.open(artwork.detailsUrl, '_blank');
};
</script>

<template>
  <pv-card class="h-full flex flex-column justify-content-between shadow-2 border-round">
    <template #header>
      <div class="text-center p-3">
        <img :src="artwork.imageUrl" :alt="artwork.title" style="height: 180px; object-fit: contain;" class="w-full" />
      </div>
    </template>

    <template #title>
      <p class="font-bold text-lg mb-1 line-clamp-1" :title="artwork.title">
        {{ artwork.title }}
      </p>
    </template>

    <template #subtitle>
      <div class="flex align-items-center justify-content-between mb-2">
        <span class="p-badge bg-primary text-white">{{ artwork.dateDisplay || 'Unknown' }}</span>
        <span class="font-semibold text-sm text-color-secondary">{{ artwork.mediumDisplay || 'Not specified' }}</span>
      </div>
    </template>

    <template #content>
      <p class="text-sm text-color-secondary line-clamp-3">
        <strong>{{ t('artwork.artist') }}:</strong> {{ artwork.artistDisplay || 'Unknown' }}
      </p>
    </template>

    <template #footer>
      <div class="flex justify-content-between align-items-center">
        <pv-button :label="t('artwork.details')" icon="pi pi-external-link" text size="small" @click="openDetails" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-badge {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>