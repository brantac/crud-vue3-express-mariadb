<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';

const isLoggedIn = ref(false);
</script>

<template>
  <header class="navbar">
    <Navbar />
  </header>
  <router-view></router-view>
</template>

<style>
/* * {
} */
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 249, 254);
  padding: 2rem 1rem;
}
</style>
