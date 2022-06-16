import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import User from './views/User.vue';
import Users from './views/Users.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/user/:id', name: 'user', component: User },
    { path: '/users', component: Users },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;