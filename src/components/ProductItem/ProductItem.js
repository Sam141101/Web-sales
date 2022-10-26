import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProductItem({ className, l24 }) {
    const SoldOut = true;

    const classes = cx('col', {
        l24,

        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('wrapper')}>
                <div className={cx('product-img')}>
                    {SoldOut ? (
                        <div className={cx('sold-out')}>
                            <span>Hết hàng</span>
                        </div>
                    ) : (
                        <div className={cx('product-sale')}>
                            <span>-38%</span>
                        </div>
                    )}

                    <Button to="/" className={cx('product-img-height')}>
                        <Image
                            src="https://product.hstatic.net/200000312481/product/1bccedc0-2012-4c10-a1a7-cf3a52bb8496_5ad10bdcb4174e1cb9b70ab184810945_grande.jpeg"
                            className={cx('img-loop')}
                        />
                    </Button>
                </div>

                <div className={cx('product-detail')}>
                    <div className={cx('box-pro-detail')}>
                        <h3 className={cx('pro-name')}>
                            <Button to="/" className={cx('pro-name-link')}>
                                .SIGNATURE SEASON 2022 HOODIE / BLACK COLOR
                            </Button>
                        </h3>

                        <div className={cx('box-pro-prices')}>
                            <p className={cx('pro-price')}>
                                <span className={cx('highlight')}>299,000₫</span>
                                <span className={cx('pro-price-del')}>
                                    <del>480,000₫</del>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
