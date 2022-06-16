<template>
    <nav>
      <ul class="nav-items">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/user/:id">Profile</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
    <!-- Login/Signup button -->
    <div class="login-signup-btns">
        <router-link class="signup-btn" to="/signup">Signup</router-link>
        <router-link class="login-btn" to="/login">Login</router-link>
    </div>
    <!-- /Login/Signup button -->
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
.login-signup-btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
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
.signup-btn {
    color: #9e30b7;
}
</style>