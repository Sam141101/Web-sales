import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCubes,
    faDesktop,
    faEnvelope,
    faFont,
    faHandPointUp,
    faImage,
    faLanguage,
    faLaptop,
    faMagic,
    faMagnet,
    faMinus,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import { faCss3, faGoogle, faHtml5 } from '@fortawesome/free-brands-svg-icons';

const MENU_ITEMS = [
    {
        id: 1,
        children: [
            {
                id: 1,
                icon: <FontAwesomeIcon icon={faCubes} />,
                type: 'language',
                to: '/en',
                content: 'WPBakery Builder ($54 saved)',
            },

            {
                id: 2,
                icon: <FontAwesomeIcon icon={faImage} />,
                type: 'language',
                to: '/en',
                content: 'Revolution Slider ($29 saved)',
            },
            {
                id: 3,
                icon: <FontAwesomeIcon icon={faRocket} />,
                type: 'language',
                to: '/en',
                content: 'Blazing Fast Loading Speed',
            },
            {
                id: 4,
                icon: <FontAwesomeIcon icon={faHandPointUp} />,
                type: 'language',
                to: '/en',
                content: 'One-Click Sample Data',
            },
            {
                id: 5,
                icon: <FontAwesomeIcon icon={faLaptop} />,
                type: 'language',
                to: '/en',
                content: 'Live Customizer',
            },
            {
                id: 6,
                icon: <FontAwesomeIcon icon={faMagic} />,
                type: 'language',
                to: '/en',
                content: 'Unlimited Colors',
            },

            {
                id: 7,
                icon: <FontAwesomeIcon icon={faDesktop} />,
                type: 'language',
                to: '/en',
                content: 'Responsive & Retina',
            },
        ],
    },

    {
        id: 2,
        children: [
            {
                id: 1,
                icon: <FontAwesomeIcon icon={faCss3} />,
                type: 'language',
                to: '/en',
                content: 'Smooth CSS3 Animation',
            },

            {
                id: 2,
                icon: <FontAwesomeIcon icon={faEnvelope} />,
                type: 'language',
                to: '/en',
                content: 'ContactForm 7 Supported',
            },
            {
                id: 3,
                icon: <FontAwesomeIcon icon={faMinus} />,
                type: 'language',
                to: '/en',
                content: 'Sticky Header',
            },
            {
                id: 4,
                icon: <FontAwesomeIcon icon={faGoogle} />,
                type: 'language',
                to: '/en',
                content: '600+ Google Fonts',
            },
            {
                id: 5,
                icon: <FontAwesomeIcon icon={faLanguage} />,
                type: 'language',
                to: '/en',
                content: 'WPML Supported',
            },
            {
                id: 6,
                icon: <FontAwesomeIcon icon={faFont} />,
                type: 'language',
                to: '/en',
                content: 'Font Awesome Icons',
            },

            {
                id: 7,
                icon: <FontAwesomeIcon icon={faHtml5} />,
                type: 'language',
                to: '/en',
                content: 'Bootstrap 3.x Based',
            },
        ],
    },

    {
        id: 3,
        children: [
            {
                id: 1,
                icon: <FontAwesomeIcon icon={faCubes} />,
                type: 'language',
                to: '/en',
                content: 'WPBakery Builder ($54 saved)',
            },

            {
                id: 2,
                icon: <FontAwesomeIcon icon={faImage} />,
                type: 'language',
                to: '/en',
                content: 'Revolution Slider ($29 saved)',
            },
            {
                id: 3,
                icon: <FontAwesomeIcon icon={faRocket} />,
                type: 'language',
                to: '/en',
                content: 'Blazing Fast Loading Speed',
            },
            {
                id: 4,
                icon: <FontAwesomeIcon icon={faHandPointUp} />,
                type: 'language',
                to: '/en',
                content: 'One-Click Sample Data',
            },
            {
                id: 5,
                icon: <FontAwesomeIcon icon={faLaptop} />,
                type: 'language',
                to: '/en',
                content: 'Live Customizer',
            },
            {
                id: 6,
                icon: <FontAwesomeIcon icon={faMagic} />,
                type: 'language',
                to: '/en',
                content: 'Unlimited Colors',
            },

            {
                id: 7,
                icon: <FontAwesomeIcon icon={faDesktop} />,
                type: 'language',
                to: '/en',
                content: 'Responsive & Retina',
            },
        ],
    },
];

const cx = classNames.bind(styles);

function ListItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('block-img')}>
                            <Image className={cx('img')} alt="about" src={images.about} />
                        </div>
                    </div>

                    <>
                        {MENU_ITEMS.map((item, index) => {
                            return (
                                <div key={index} className={cx('col', 'l-3', 'pd0')}>
                                    {item.children.map((it, index) => {
                                        return (
                                            <Button
                                                leftIcon={it.icon}
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
                                </div>
                            );
                        })}
                    </>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
