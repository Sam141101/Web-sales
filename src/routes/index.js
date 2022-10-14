import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Upload from '~/pages/Upload';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Follwing },
    { path: '/upload', component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
