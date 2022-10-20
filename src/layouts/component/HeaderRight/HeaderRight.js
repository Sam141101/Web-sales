import classNames from 'classnames/bind';
import styles from './HeaderRight.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderRight() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('mini-cart-wrap')}>
                <div className={cx('mini-cart')}>
                    <div className={cx('mini-cart-icon')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>

                    <div className={cx('mini-cart-text')}>
                        My Cart
                        <div className={cx('mini-cart-total')}>$0.00</div>
                    </div>
                </div>

                {/* content cart */}
            </div>
        </div>
    );
}

export default HeaderRight;
