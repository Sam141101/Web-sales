import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

// import Button from '~/components/Button';
// import Image from '~/components/Image';
// import images from '~/assets/images';
import Product from '~/components/Product';
import NavBar from '~/components/NavBar';
import DetailProduct from '~/components/DetailProduct';

import BoxSidebar from '~/components/BoxSidebar';

import FakeSP from '~/FakeSP';

const text = [
    {
        id: 1,
        to: '/en',
        content: 'Danh mục',
    },

    {
        id: 2,
        disabled: true,
        content: 'Tất cả sản phẩm',
    },
];

const explorer = [
    {
        name: 'TOPS',
        isFolder: true,
        icon: <FontAwesomeIcon icon={faMinus} />,
        items: [
            {
                name: 'TEE',
                isFolder: true,
                to: '/en',
                items: [],
            },
            {
                name: 'POLO',
                isFolder: false,
                to: '/en',
                items: [],
            },

            {
                name: 'CROPTOP',
                isFolder: false,
                to: '/en',
                items: [],
            },

            {
                name: 'HOODIE & SWEATER',
                isFolder: false,
                to: '/en',
                items: [],
            },
        ],
    },

    {
        name: 'BOTTOM',
        isFolder: true,
        icon: <FontAwesomeIcon icon={faMinus} />,
        items: [
            {
                name: 'SHORT',
                isFolder: true,
                to: '/en',
                items: [],
            },
        ],
    },

    {
        name: 'ACCESSORIES',
        icon: <FontAwesomeIcon icon={faMinus} />,

        isFolder: false,
        items: [
            {
                name: 'TOTE BAG',
                isFolder: true,
                to: '/en',
                items: [],
            },
        ],
    },
];

const cx = classNames.bind(styles);

function Shop() {
    const flag = false;

    return (
        <div className={cx('wrapper')}>
            <NavBar customContent={text} />

            <div className={cx('main-content')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row')}>
                        {/* col left */}
                        <div className={cx('col', 'l3', 'mt50')}>
                            <BoxSidebar explorer={explorer} />
                        </div>

                        {/* col right */}
                        <div className={cx('col', 'l9', 'mt50')}>
                            <div className={cx('row', 'mb50')}>
                                <div className={cx('col', 'l8')}>
                                    <h1 className={cx('title')}>Tất cả sản phẩm</h1>
                                </div>
                                <div className={cx('col', 'l4')}>
                                    <div className={cx('options')}>
                                        <span className={cx('sort')}>
                                            <select className={cx('sort-by')}>
                                                <option>Giá: Tăng dần</option>
                                                <option>Giá: Giảm dần</option>
                                                <option>Tên: A-Z</option>
                                                <option>Tên: Z-A</option>
                                                <option>Cũ nhất</option>
                                                <option>Mới nhất</option>
                                                <option>Bán chạy nhất</option>
                                                <option>Tồn kho: Giảm dần</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('wrapper-collection-1')}>
                                <Product data={FakeSP} flag={flag} colpc="l3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
