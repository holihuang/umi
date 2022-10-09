export default {
    npmClient: 'pnpm',
    // 集成dva
    plugins: [
        '@umijs/plugins/dist/dva',
    ],
    dva: {},
    routes: [
        {
        path: '/login',
        component: 'login/index'
    }, {
        path: '/',
        routes: [{
            path: '/',
            component: 'index',
            routes: [{
                path: '/',
                redirect: '/home',
            }, {
                path: 'home',
                component: 'home/index'
            }, {
                path: 'docs',
                component: 'docs',
            }, {
                path: 'user',
                component: 'user/index',
                wrappers: [
                    '@/wrappers/auth'
                ],
            }],
        }],
    }],
};
