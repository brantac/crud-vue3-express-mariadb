<template>
    <main class="login-section">
        <h1>Login</h1>
        <form
            class="login-form"
        >
            <div class="input-group">
                <label for="email">Email</label>
                <input ref="email" type="email" id="email" name="email" />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input ref="password" type="password" id="password" name="password" />
            </div>
            <button class="submit-login-btn" @click="login" >
                Login    
            </button>
            <router-link class="create-account-btn" to="/signup">Create an account</router-link>
        </form>
    </main>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const email = ref()
const password = ref()

const login = async function (e: Event) {
    e.preventDefault()    
    const user = {
        email: email.value.value,
        password: password.value.value
    }
    try {
        const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error: ", error)
    }
}
</script>

<style scoped>
.login-section {
    padding: 0 1rem;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}
.input-group label {
    font-size: 1.2rem;
    font-weight: bold;
}
.input-group input {
    font-size: 1.2rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}
.submit-login-btn {
    background: #9e30b7;
    color: white;
    border: 1px solid white;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    font-weight: bold;
}
.create-account-btn {
    color:#9e30b7;
}
</style>