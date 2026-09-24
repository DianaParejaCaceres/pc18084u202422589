<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './language-switcher.vue';
import FooterContent from './footer-content.vue';
import ArtworkList from "@/art-inventory/presentation/components/artwork-list.vue";
import { artworksStore } from "@/art-inventory/application/artworks.store.js";

const { t } = useI18n();

const galleryOptions = computed(() => [
  { label: t('galleries.impressionism'), value: 'impressionism' },
  { label: t('galleries.modern'), value: 'modern' }
]);

const currentGallery = ref('impressionism');

const onGalleryChange = (event) => {
  if (event.value) {
    currentGallery.value = event.value;
    artworksStore.loadArtworks(event.value);
  }
};

const artworks = computed(() => artworksStore.artworks || []);
const errors = computed(() => artworksStore.errors);

onMounted(() => {
  artworksStore.loadArtworks('impressionism');
});
</script>

<template>
  <div class="layout-container">
    <header class="sticky-header">
      <pv-toolbar class="bg-primary">
        <template #start>
          <div class="flex align-items-center gap-2">
            <img
                src="https://img.logo.dev/artic.edu?token=pk_anonymous"
                alt="Logo"
                class="w-2rem h-2rem border-circle"
            />
            <span class="font-bold text-xl text-primary-contrast">{{ $t('app-title') }}</span>
          </div>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-toolbar>
    </header>

    <main class="content-padding">
      <div class="mb-3">
        <pv-select-button
            v-model="currentGallery"
            :options="galleryOptions"
            option-label="label"
            option-value="value"
            @change="onGalleryChange"
        />
      </div>

      <div v-if="artworksStore.loading" class="text-center p-5">
        <i class="pi pi-spin pi-spinner text-3xl"></i>
      </div>
      <div v-else-if="errors.length" class="text-center p-4 text-red-500">
        {{ $t('unavailable-artworks') }}
      </div>
      <artwork-list v-else-if="artworks.length" :artworks="artworks"/>
    </main>

    <footer>
      <footer-content/>
    </footer>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.content-padding {
  padding: 1rem;
  flex: 1;
}

@media screen and (min-width: 768px) {
  .content-padding {
    padding: 2rem;
  }
}
</style>