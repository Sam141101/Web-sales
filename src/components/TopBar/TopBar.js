import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import Image from '../Image';
import images from '~/assets/images';
import PolicyItem from '~/components/PolicyItem';
import Login from '~/components/Login';
import Cart from '~/components/Cart';

const cx = classNames.bind(styles);

function TopBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('flexContainer-header')}>
                    <Button to="/" className={cx('pd15')}>
                        <Image className={cx('logo-shop')} alt="Logo_Shop" src={images.shop} />
                    </Button>

                    <PolicyItem />

                    <div className={cx('login-cart')}>
                        <div className={cx('login-wrap')}>
                            <Login />
                        </div>
                        <div className={cx('login-wrap')}>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
