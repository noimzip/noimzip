<script setup>
import { LiquidGlass } from '@wxperia/liquid-glass-vue'
</script>

<template>
  <header id="header-container">
    <LiquidGlass
      padding="0px 50%"
      :style="{ position: 'fixed', top: '50px', left: '50%', width: '90%' }"
      :elasticity="0.05"
    >
      <nav id="header-navbar">
        <h2>
          Noimzip
        </h2>
        <div id="app-icons">
          <a href="https://github.com/noimzip" target="_blank">
            <img src="./assets/GitHub-logo.svg" class="logo" width="45" height="45" alt="Github logo" />
          </a>
          <a href="https://x.com/dZ1ytwQAqUyCT9" target="_blank">
            <img src="./assets/X-logo.svg" class="logo" width="45" height="45" alt="X logo" />
          </a>
        </div>
      </nav>
    </LiquidGlass>
    <LiquidGlass
      padding="16px"
      :style="{ position: 'fixed', top: '50px', left: '340px' }"
    >
      <span style="font-size: 32px; font-weight: 600;">
        <a href="#header-container">
          Home
        </a>
      </span>
    </LiquidGlass>
    <LiquidGlass
      padding="16px"
      :style="{ position: 'fixed', top: '50px', left: '485px' }"
    >
      <span style="font-size: 32px; font-weight: 600;">
        <a href="#gallery-container">
          Gallery
        </a>
      </span>
    </LiquidGlass>
    <LiquidGlass
      padding="16px"
      :style="{ position: 'fixed', top: '50px', left: '635px' }"
    >
      <span style="font-size: 32px; font-weight: 600;">
        <a href="#profile-container">
          Profile
        </a>
      </span>
    </LiquidGlass>
    <LiquidGlass
      padding="16px"
      :style="{ position: 'fixed', top: '50px', left: '900px' }"
    >
      <span style="font-size: 32px; font-weight: 600;">
        <a href="#header-container">
          Switch to M3E
        </a>
      </span>
    </LiquidGlass>
  </header>
</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 250ms;
}
.logo:hover {
  filter: drop-shadow(0 0 0.5em #fff);
}
</style>