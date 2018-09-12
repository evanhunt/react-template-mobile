import { LoadableWelcome, LoadableLoginPage } from './asyncs';

export const privateRoutes = [
    {
        path: '/',
        exact: true,
        component: LoadableWelcome,
    },
    {
        path: '/login',
        component: LoadableLoginPage,
    },
];
