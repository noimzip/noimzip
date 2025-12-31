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
        <h2>aaaaaa</h2>
      </div>
    </LiquidGlass>
  </header>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
