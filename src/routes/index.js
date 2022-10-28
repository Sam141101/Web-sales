import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';
import Upload from '~/pages/Upload';
import InformationProduct from '~/pages/InformationProduct';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Follwing },
    { path: '/upload', component: Upload, layout: null },
    { path: '/infomation', component: InformationProduct },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
