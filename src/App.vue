<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div class="nav">
    <router-link to="/">Index</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<style>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 200px;
  height: 200px;
}
</style>
