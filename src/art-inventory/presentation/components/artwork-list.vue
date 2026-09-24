<script setup lang="js">
import ArtworkItem from "./artwork-item.vue";
const { artworks } = defineProps({
  artworks: { type: Array, required: true }
});
</script>

<template>
  <div class="grid">
    <div v-for="artwork in artworks" :key="artwork.id" class="col-12 md:col-6 lg:col-4 p-2">
      <artwork-item :artwork="artwork" />
    </div>
  </div>
</template>

<style scoped>

</style>