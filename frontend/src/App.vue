<script setup lang="ts">
import { ref } from 'vue';

const isLoggedIn = ref(false);
</script>

<template>
  <header class="navbar">
    <nav>
      <ul class="nav-items">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/user/:id">User</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
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
  text-align: center;
  color: #2c3e50;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #9e30b7;
  padding: 2rem 1rem;
}
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
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
