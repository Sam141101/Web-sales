import classNames from 'classnames/bind';
import styles from './BoxSidebar.module.scss';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
// import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';
import NavBar from '~/components/NavBar';
import DetailProduct from '~/components/DetailProduct';

import BtnTree from '~/components/BtnTree';

const cx = classNames.bind(styles);

const explorer = {
    name: 'TOPS',
    // to: '#',
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
};

const explorer2 = {
    name: 'BOTTOM',
    isFolder: true,
    // to: '#',
    icon: <FontAwesomeIcon icon={faMinus} />,
    items: [
        {
            name: 'SHORT',
            isFolder: true,
            to: '/en',
            items: [],
        },
    ],
};

const explorer3 = {
    name: 'ACCESSORIES',
    icon: <FontAwesomeIcon icon={faMinus} />,
    // to: '#',
    isFolder: false,
    items: [
        {
            name: 'TOTE BAG',
            isFolder: true,
            to: '/en',
            items: [],
        },
    ],
};

function BoxSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-block')}>
                <div className={cx('tree-menu')}>
                    <BtnTree explorer={explorer} />
                    <BtnTree explorer={explorer2} />
                    <BtnTree explorer={explorer3} />
                </div>
            </div>
        </div>
    );
}

export default BoxSidebar;
