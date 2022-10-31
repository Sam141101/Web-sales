import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import { useState } from 'react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import Product from '~/components/Product';

const contentBar = [
    {
        id: 1,
        to: '/en',
        content: 'Sản phẩm nổi bật',
    },

    {
        id: 2,
        disabled: true,
        content: '.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR',
    },
];

const cx = classNames.bind(styles);

function NavBar({ data, customContent = contentBar }) {
    const [content, setContent] = useState(customContent);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l12')}>
                        <ol className={cx('content')}>
                            <li className={cx('content-item')}>
                                <Button to="/" className={cx('item-link')}>
                                    Trang chủ
                                </Button>
                            </li>

                            {content.map((item, index) => {
                                return (
                                    <li key={index} className={cx('content-item')}>
                                        <Button disabled={item.disabled} to={item.to} className={cx('item-link')}>
                                            {item.content}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
