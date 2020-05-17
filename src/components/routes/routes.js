import { lazy } from 'react';

const Home = lazy(() => import('../../components/pages/Home'));
const Detail = lazy(() => import('../../components/copyDetail/index'));;

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/items/:color/:year/:pantone",
        component:Detail
    }
];

export {
    routes
};