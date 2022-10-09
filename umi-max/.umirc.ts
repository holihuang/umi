import { defineConfig } from '@umijs/max';

export default defineConfig({
    antd: {
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'myApp',
    },
    dva: {},
    routes: [
        {
            path: '/',
            redirect: '/my',
        },
        {
            name: 'My',
            path: '/my',
            component: './My',
            routes: [
                {
                    name: 'A',
                    path: '/my/a',
                    component: './My/A',
                    routes: [{
                        name: 'B',
                        path: '/my/a/b',
                        component: './My/A/B',
                        routes: [
                            {
                                name: 'C',
                                path: '/my/a/b/c',
                                component: './My/A/B/C',
                                routes: [
                                    {
                                        name: 'D',
                                        path: '/my/a/b/c/d',
                                        component: './My/A/B/C/D',
                                        routes: [
                                            {
                                                name: 'Element is my favososfdssfdsfsdgdg',
                                                path: '/my/a/b/c/d/e',
                                                component: './My/A/B/C/D/E',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    }],
                },
            ],
        },
        {
            name: 'Friend',
            path: '/friend',
            component: './Friend'
        },
  ],
  npmClient: 'pnpm',
});