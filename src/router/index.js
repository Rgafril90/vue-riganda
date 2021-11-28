import { createRouter, createWebHashHistory } from "vue-router";

//
// import HelloWorld from import('@/component/HelloWorld')


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/HelloWorld')
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/main')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/main')
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/main')
    },
    {
        path: '/Profil',
        name: 'Profil',
        component: () => import('@/views/Profil/main')
    },
    {
        path: '/About',
        name: 'About',
        component: () => import('@/views/About/main')
    }
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;