import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import TopBar from '~/components/TopBar';
import HeaderLeft from '../HeaderLeft';
import HeaderCenter from '../HeaderCenter';
import HeaderRight from '../HeaderRight';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Languages_item = [
    {
        type: 'language',
        to: '/en',
        title: 'English',
    },
    {
        type: 'language',
        to: '/vi',
        title: 'Tiếng Việt',
    },
];

const MENU_ITEMS = [
    {
        id: 1,
        type: false,
        wrapper: false,
        to: '/',
        green: true,
        content: 'Home',
        icon: <FontAwesomeIcon icon={faAngleDown} />,
        children: {
            title: 'more',
            data: [
                {
                    id: 1,
                    type: 'language',
                    to: '/en',
                    content: 'Organik Main',
                },

                {
                    id: 2,
                    type: 'language',
                    to: '/en',
                    content: 'Organik Fresh',
                },
                {
                    id: 3,
                    type: 'language',
                    to: '/en',
                    content: 'Organik Shop',
                },
                {
                    id: 4,
                    type: 'language',
                    to: '/en',
                    content: 'Organik Store',
                },

                {
                    id: 5,
                    type: 'language',
                    to: '/en',
                    content: 'Organik Farm',
                },

                {
                    id: 6,
                    type: 'language',
                    to: '/en',
                    content: 'Organik House',
                    title: 'New',
                },
                {
                    id: 7,
                    type: 'language',
                    to: '/en',
                    content: 'Go Green',
                    title: 'New',
                },

                {
                    id: 8,
                    type: 'language',
                    to: '/en',
                    content: 'Organik Healthy',
                    title: 'New',
                },
            ],
        },
    },

    {
        id: 2,
        type: false,
        wrapper: false,
        to: '/pages',
        content: 'Pages',
        icon: <FontAwesomeIcon icon={faAngleDown} />,
        children: {
            title: 'more',
            data: [
                {
                    id: 1,
                    type: 'language',
                    to: '/en',
                    content: 'About Us',
                    children: {
                        title: 'more',
                        data: [
                            {
                                type: 'language',
                                to: '/en',
                                content: 'About Us - 1',
                            },

                            {
                                type: 'language',
                                to: '/en',
                                content: 'About Us - 2',
                            },
                        ],
                    },
                },

                {
                    id: 2,
                    type: 'language',
                    to: '/en',
                    content: 'Contact',
                },

                {
                    id: 3,
                    type: 'language',
                    to: '/en',
                    content: 'Gallery Freestyle',
                },

                {
                    id: 4,
                    type: 'language',
                    to: '/en',
                    content: 'Gallery Grid',
                },

                {
                    id: 4,
                    type: 'language',
                    to: '/en',
                    content: '404',
                },
            ],
        },
    },

    {
        id: 3,
        flag: true,
        type: false,
        green: false,
        to: '/shortcodes',
        content: 'Shortcodes',
    },

    {
        id: 4,
        type: true,
        flag: true,
        src: images.logo,
        alt: 'Trang chu',
        to: '/vi',
        green: false,
    },

    {
        id: 5,
        type: false,
        wrapper: true,
        list: true,
        to: '/features',
        num: true,
        content: 'Features',
        icon: <FontAwesomeIcon icon={faAngleDown} />,
    },

    {
        id: 6,
        type: false,
        wrapper: true,
        list: false,
        num: false,
        to: '/shop',
        content: 'Shop',
        icon: <FontAwesomeIcon icon={faAngleDown} />,
        // children: {
        //     title: 'more',
        //     data: [
        //         {
        //             id: 1,
        //             type: 'language',
        //             to: '/en',
        //             content: 'Blog List',
        //         },

        //         {
        //             id: 2,
        //             type: 'language',
        //             to: '/en',
        //             content: 'Blog Classic',
        //         },
        //         {
        //             id: 3,
        //             type: 'language',
        //             to: '/en',
        //             content: 'Blog Masonry',
        //         },
        //     ],
        // },
    },

    {
        id: 7,
        wrapper: false,
        green: false,
        type: false,
        to: '/blog',
        content: 'Blog',
        icon: <FontAwesomeIcon icon={faAngleDown} />,
        children: {
            title: 'more',
            data: [
                {
                    id: 1,
                    type: 'language',
                    to: '/en',
                    content: 'Blog List',
                },

                {
                    id: 2,
                    type: 'language',
                    to: '/en',
                    content: 'Blog Classic',
                },
                {
                    id: 3,
                    type: 'language',
                    to: '/en',
                    content: 'Blog Masonry',
                },
            ],
        },
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <TopBar items={Languages_item} />
            <div className={cx('inner')}>
                <div className={cx('header-type')}>
                    <HeaderLeft />
                    <HeaderCenter items={MENU_ITEMS} />
                    <HeaderRight />
                </div>
            </div>
        </header>
    );
}

export default Header;
