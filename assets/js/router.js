import { createWebHashHistory, createRouter } from "vue-router";

import NotFound from '../vue/routes/NotFound.vue';
import BusinessCard from '../vue/routes/BusinessCard.vue';

const routes = [
    {
        path: '/',
        name: 'businessCard',
        component: BusinessCard,
    },
    {
        path: '/error',
        name: 'error',
        component: NotFound,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/error'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active',
});

export default router;