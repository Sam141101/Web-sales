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

import { useEffect, useState } from 'react';

import FakeImage from '~/FakeSP/FakeImage';
import FakeSP from '~/FakeSP';
import Pagination from '~/components/Pagination';

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

const FakeSP1 = [
    {
        id: 1,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp1,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 2,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp2,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 3,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp3,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 4,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp4,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 5,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp5,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 6,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp6,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 7,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp7,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 8,
        soldout: true,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp8,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 9,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp9,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },

    {
        id: 10,
        soldout: false,
        sale: '-38%',
        to: '/',
        img: FakeImage.sp10,
        price: '299,000₫',
        discount: '480,000₫',
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },
];

const cx = classNames.bind(styles);

function Shop() {
    const flag = false;

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 15,
        totalRows: 15,
    });

    const [filters, setFilters] = useState({
        limit: 10,
        page: 1,
    });

    console.log(pagination);

    useEffect(() => {
        let value;

        if (filters.page > 1) {
            value = FakeSP1;
        } else {
            value = FakeSP;
        }

        setPostList(value);
        setPagination({
            page: 2,
            limit: 15,
            totalRows: 25,
        });
    }, [filters]);

    const handlePageChange = (newPage) => {
        console.log('newPage :', newPage);
        setFilters({
            ...filters,
            page: newPage,
        });
    };

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
                                <Product data={postList} flag={flag} colpc="l3" />
                            </div>

                            <div className={cx('sort-page')}>
                                <div className={cx('col', 'l12')}>
                                    <Pagination pagination={pagination} onPageChange={handlePageChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
