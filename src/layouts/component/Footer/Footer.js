import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import FooterItem from '~/components/FooterItem';

const cx = classNames.bind(styles);

const Footer_link = [
    'Liên kết',
    {
        id: 1,
        to: '/en',
        content: 'Tìm kiếm',
    },
    {
        id: 2,
        to: '/en',
        content: 'Giới thiệu',
    },
    {
        id: 3,
        to: '/en',
        content: 'Chính sách đổi trả',
    },

    {
        id: 4,
        to: '/en',
        content: 'Chính sách bảo mật',
    },

    {
        id: 5,
        to: '/en',
        content: 'Điều khoản dịch vụ',
    },
];

const Footer_contact = [
    'Thông tin liên hệ',
    {
        id: 1,
        to: '/en',
        icon: images.icon1,
        flag: true,
        content: 'TP.HCM',
    },
    {
        id: 2,
        to: '/en',
        icon: images.icon2,
        flag: true,

        content: '‭086 2642568‬',
    },
    {
        id: 3,
        to: '/en',
        icon: images.icon3,
        flag: true,

        content: 'coming soon',
    },

    {
        id: 4,
        icon: images.icon4,
        flag: true,

        to: '/en',
        content: 'outerity.local@gmail.com',
    },
];

const Footer_fanpage = ['Fanpage'];

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('top-footer')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('number_phone')}>
                        <div className={cx('phone')}>
                            <FontAwesomeIcon className={cx('icon-phone')} icon={faPhone} />
                        </div>
                        <span>Hỗ trợ / Mua hàng:</span>
                        <a href="#">086 2642568‬</a>
                    </div>
                </div>
            </div>

            <div className={cx('main-footer')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l4')}>
                            <div className={cx('footer-content1')}>
                                <h4 className={cx('footer-title')}>Giới thiệu</h4>
                                <div className={cx('footer-content')}>
                                    <p>Hi.</p>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col', 'l2')}>
                            <FooterItem data={Footer_link} />
                        </div>

                        <div className={cx('col', 'l3')}>
                            <FooterItem disabled data={Footer_contact} />
                        </div>
                        <div className={cx('col', 'l3')}>
                            <FooterItem data={Footer_fanpage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom-footer')}></div>
        </footer>
    );
}

export default Footer;
