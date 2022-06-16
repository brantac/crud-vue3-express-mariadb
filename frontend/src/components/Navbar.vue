<template>
    <nav>
      <ul class="nav-items">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/user/:id">Profile</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
    <!-- Login button -->
    <router-link class="login-btn" to="/login">Login</router-link>
    <!-- /Login button -->
</template>

<script setup lang="ts">

</script>

<style scoped>
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
  color: rgb(56, 1, 53);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>