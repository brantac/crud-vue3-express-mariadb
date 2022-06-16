<template>
    <main class="user-section">
        <h1>Welcome, {{ user.name }}</h1>
    </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref(null)

const userId = computed(() => {
    return route.params.id;
});

async function fetchUser() {
    try {
        const response = await fetch(`http://localhost:4000/user/${userId.value}`);
        const data = await response.json();
        
        if (data.error) {
            console.log(data.error);
        }
        else {
            console.log(data);
            user.value = data;
        }
        
    } catch (error) {
        console.log("Erro ao carregar informações do usuário: ", error)
    }
}

// Fetch user data immediately
fetchUser();
// Fetch user data whenever the userId changes
watch(userId, fetchUser);
</script>

<style scoped>

</style>