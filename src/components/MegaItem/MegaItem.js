import classNames from 'classnames/bind';
import styles from './MegaItem.module.scss';

import Button from '../Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const ITEM_LISTS = [
    {
        id: 1,
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        content: 'My Account',
    },

    {
        id: 2,
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        content: 'Cart',
    },

    {
        id: 3,
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        content: 'Check Out',
    },

    {
        id: 4,
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        content: 'Wishlist',
    },
];

const ITEM_LISTS_CENTER = [
    {
        id: 1,
        title: 'Fruits',
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        children: [
            {
                id: 1,
                type: 'language',
                to: '/en',
                content: 'Seville Orange',
            },

            {
                id: 2,
                type: 'language',
                to: '/en',
                content: 'Aurore Grape',
            },
            {
                id: 3,
                type: 'language',
                to: '/en',
                content: 'Tieton Cherry',
            },
            {
                id: 4,
                type: 'language',
                to: '/en',
                content: 'Tomato Juice',
                title: 'New',
            },
            {
                id: 5,
                type: 'language',
                to: '/en',
                content: 'Cauliflower',
            },
        ],
    },

    {
        id: 2,
        title: 'Featured',
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        children: [
            {
                id: 1,
                type: 'language',
                to: '/en',
                content: 'Sprouting Broccoli',
            },

            {
                id: 2,
                type: 'language',
                to: '/en',
                content: 'Chinese Cabbage',
                title: 'Sale',
                color: true,
            },
            {
                id: 3,
                type: 'language',
                to: '/en',
                content: 'Cara Orange',
            },
            {
                id: 4,
                type: 'language',
                to: '/en',
                content: 'Cauliflower',
            },
            {
                id: 5,
                type: 'language',
                to: '/en',
                content: 'Tomato Juice',
            },
        ],
    },

    {
        id: 3,
        title: 'Best seller',
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        children: [
            {
                id: 1,
                type: 'language',
                to: '/en',
                content: 'Uvina Grape',
            },

            {
                id: 2,
                type: 'language',
                to: '/en',
                content: 'Seville Orange',
            },
            {
                id: 3,
                type: 'language',
                to: '/en',
                content: 'Aurore Grape',
            },
            {
                id: 4,
                type: 'language',
                to: '/en',
                content: 'Tieton Cherry',
            },
            {
                id: 5,
                type: 'language',
                to: '/en',
                content: 'Tomato Juice',
                title: 'New',
            },
            {
                id: 6,
                type: 'language',
                to: '/en',
                content: 'Sprouting Broccoli',
            },
        ],
    },
];

function MegaItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-left')}>
                <h3 className={cx('left-title')}>Shop Pages</h3>
                <>
                    {ITEM_LISTS.map((dt) => {
                        return (
                            <Button className={cx('custom')} flagTitle={dt.title} key={dt.id} active to={dt.to}>
                                {dt.content}
                            </Button>
                        );
                    })}
                </>
            </div>

            <div className={cx('inner-center')}>
                {ITEM_LISTS_CENTER.map((item, index) => {
                    return (
                        <div key={index} className={cx('wrapper-center')}>
                            <h3 className={cx('left-title', 'border-bottom')}>{item.title}</h3>

                            <>
                                {item.children.map((it, index) => {
                                    return (
                                        <Button
                                            color={it.color}
                                            smallFlagTitle
                                            active
                                            flagTitle={it.title}
                                            key={index}
                                            className={cx('custom', 'custom-small')}
                                            to={it.to}
                                        >
                                            {it.content}
                                        </Button>
                                    );
                                })}
                            </>
                        </div>
                    );
                })}
            </div>

            <div className={cx('inner-right')}>
                <Image className={cx('right-img')} alt="megamenu" src={images.megamenu} />
            </div>
        </div>
    );
}

export default MegaItem;
