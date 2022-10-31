import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import Upload from '~/pages/Upload';
import InformationProduct from '~/pages/InformationProduct';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/upload', component: Upload, layout: null },
    { path: '/infomation', component: InformationProduct },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
