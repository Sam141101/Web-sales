import classNames from 'classnames/bind';
import styles from './HeaderItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleRight,
    faAnglesRight,
    faMagnet,
    faMinus,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';

import ShopList from '~/components/ShopList';

const SHOP_LIST = [
    {
        id: 1,
        content: 'TOPS',
        icon: <FontAwesomeIcon icon={faAngleRight} />,
        flag: false,

        children: [
            {
                id: 1,
                to: '/en',
                content: 'TEE',
            },

            {
                id: 2,
                to: '/en',
                content: 'POLO',
            },
            {
                id: 3,
                to: '/en',
                content: 'CROPTOP',
            },
            {
                id: 4,
                to: '/en',
                content: 'HOODIE & SWEATER',
            },
        ],
    },

    {
        id: 2,
        content: 'BOTTOM',
        icon: <FontAwesomeIcon icon={faAngleRight} />,
        flag: false,
        children: [
            {
                id: 1,
                to: '/en',
                content: 'SHORT',
            },
        ],
    },

    {
        id: 3,
        content: 'ACCESSORIES',
        icon: <FontAwesomeIcon icon={faAngleRight} />,
        flag: false,
        children: [
            {
                id: 1,
                to: '/en',
                content: 'TOTE BAG',
            },
        ],
    },
];

const cx = classNames.bind(styles);

function HeaderItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <nav className={cx('menu-list')}>
                    <div className={cx('menu-item')}>
                        <Button to="/" className={cx('list-item', 'active')}>
                            HOME
                        </Button>
                        <Button active to="/" className={cx('list-item')}>
                            OUTERITY KIDS
                        </Button>

                        <ShopList item={SHOP_LIST}>
                            <div>
                                <Button
                                    active
                                    rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                                    to="/"
                                    className={cx('list-item')}
                                >
                                    SHOP
                                </Button>
                            </div>
                        </ShopList>

                        <Button active to="/" className={cx('list-item')}>
                            ABOUT
                        </Button>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HeaderItem;
