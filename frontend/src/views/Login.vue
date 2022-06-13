<template>
    <main class="login-section">
        <h1>Login</h1>
        <form
            class="login-form"
        >
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <div class="input-group">
                <label for="email">Password</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <button
                class="submit-login-btn"
                @click="login"
            >
                Login    
            </button>
        </form>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.login-section {
    padding: 0 1rem;
}
</style>