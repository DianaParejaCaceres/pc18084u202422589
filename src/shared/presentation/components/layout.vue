<script setup>
import LanguageSwitcher  from "./language-switcher.vue";
import FooterContent  from "./footer-content.vue";
</script>

<template>
<div class="layout-container">
  <header class="sticky-header">
    <pv-toolbar class="bg-primary">
      <template #start>
        <div class="flex align-items-center gap-2">
          <img
              src="https://img.logo.dev/artic.edu?token=pk_anonymous"
              alt="Art Institute Logo"
              class="w-2rem h-2rem border-circle"/>
          <span class="font-bold text-xl text-primary-contrast">{{ $t('app-title') }}</span>
        </div>
      </template>
      <template #end>
        <language-switcher/>
      </template>
    </pv-toolbar>
  </header>
  <main class="content-padding">
    <slot></slot>
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