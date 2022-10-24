import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import images from '~/assets/images';
import { faAngleDown, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper', 'pd15')}>
            <div className={cx('header-cart')}>
                <FontAwesomeIcon className={cx('cart')} icon={faBagShopping} />

                <span className={cx('box-text')}>
                    <span className={cx('txtbl')}>Giỏ hàng</span>
                </span>
            </div>
        </div>
    );
}

export default Cart;
