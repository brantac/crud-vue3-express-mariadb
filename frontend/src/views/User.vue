<template>
    <div>
        <h1>{{ userId }}</h1>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const userId = computed(() => {
    return route.params.id;
});
</script>

<style scoped>

</style>