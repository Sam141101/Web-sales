import classNames from 'classnames/bind';
import styles from './SelectQuantity.module.scss';

import { useState, useLayoutEffect } from 'react';

import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';

const cx = classNames.bind(styles);

function SelectQuantity() {
    const [amount, setAmount] = useState(1);

    const plusQuantity = () => {
        setAmount(amount + 1);
    };

    const minusQuantity = () => {
        setAmount(amount - 1);
    };

    useLayoutEffect(() => {
        if (amount < 1) {
            setAmount(1);
        }
    }, [amount]);

    return (
        <div className={cx('quantity-area')}>
            <input type="button" onClick={minusQuantity} value="-" className={cx('qty-btn')} />
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                className={cx('quantity-selector')}
            />
            <input type="button" onClick={plusQuantity} value="+" className={cx('qty-btn')} />
        </div>
    );
}

export default SelectQuantity;
