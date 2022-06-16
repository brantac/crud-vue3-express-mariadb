<template>
    <div>
        <h1>Users</h1>
        <p @click="goToUserPage(user.user_id)" v-for="user in users" :key="user.user_id">
            {{ user.name }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { UserService, IUser } from '../services/UserService';

const users = ref<IUser[]>([]);

onMounted(async () => {
    const userService = new UserService();
    const allUsers = await userService.fetchAllUsers("http://localhost:4000/users");
    users.value = allUsers;
    console.log(users.value);
});


const router = useRouter();
const goToUserPage = (id: number) => {
    router.push({name: 'user', params: {id}});
}
</script>

<style scoped>

</style>