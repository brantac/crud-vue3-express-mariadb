<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';

const isLoggedIn = ref(false);
</script>

<template>
  <header class="navbar">
    <Navbar />
    <!-- Login button -->
    <router-link class="login-btn" v-if="!isLoggedIn" to="/login">Login</router-link>
    <!-- /Login button -->
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
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 249, 254);
  padding: 2rem 1rem;
}
.login-btn {
  text-decoration: none;
  background: #9e30b7;
  color: white;
  border: 1px solid white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
}
</style>
