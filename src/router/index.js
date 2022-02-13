import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

const constantRouters = [
    {
        name: 'HelloWorld',
        path: '/',
        component: () => import('@/components/HelloWorld'),
        props: { routerProps: 'wow~' },
    },
    {
        name: 'css',
        path: '/css',
        component: () => import('@/components/css-practice'),
        children: [{
            name: 'loading',
            path: 'loading',
            component: () => import('@/components/css-loading-effect1'),
            meta: { requiresAuth: true }
        }],
    },
    {   // catch all redirect
        path: '*',
        redirect: '/',
    }
];

const router = new vueRouter({
    mode: 'history',
    routes: constantRouters,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;