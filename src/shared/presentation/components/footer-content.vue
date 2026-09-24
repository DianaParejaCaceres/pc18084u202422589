<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="grid mt-4 p-4 justify-content-center bg-primary text-primary-contrast text-center">
    <div class="col-12 flex flex-column align-items-center">
      <p class="m-0 mb-2 font-semibold">{{ t('footer.copyright') }}</p>
    </div>
    <div class="col-12 flex flex-column align-items-center">
      <p class="m-0 text-sm">{{ t('footer.developed-by') }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>