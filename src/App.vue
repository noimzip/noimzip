<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { LiquidGlass } from '@wxperia/liquid-glass-vue'
</script>

<template>
  <header>
    <LiquidGlass
      padding="0px 46%"
      :style="{ position: 'fixed', top: '50px', left: '50%', width: '90%'}"
    >
      <div class="p-6">
        <a href="https://github.com/noimzip" target="_blank">
          <img src="./assets/github-mark-white.svg" class="logo" width="50" height="50" alt="Github logo" />
        </a>
        <a href="https://x.com/dZ1ytwQAqUyCT9" target="_blank">
          <img src="./assets/logo.svg" class="logo" width="50" height="50" alt="X logo" />
        </a>
      </div>
    </LiquidGlass>
  </header>
  <HelloWorld msg="Vite + Vue" />

</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 500ms;
}
.logo:hover {
  filter: drop-shadow(0 0 0.5em #fff);
}
</style>
