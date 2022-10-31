import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProductItem({ className, l24, data, colpc }) {
    const SoldOut = data.soldout;

    const classes = cx('col', {
        // l24,
        // colpc: colpc,

        [className]: className,
    });

    return (
        <div className={`col ${colpc}`}>
            <div className={cx('wrapper')}>
                <div className={cx('product-img')}>
                    {SoldOut ? (
                        <div className={cx('sold-out')}>
                            <span>Hết hàng</span>
                        </div>
                    ) : (
                        <div className={cx('product-sale')}>
                            {/* <span>-38%</span> */}
                            <span>{data.sale}</span>
                        </div>
                    )}

                    <Button to={data.to} className={cx('product-img-height')}>
                        <Image src={data.img} className={cx('img-loop')} />
                    </Button>
                </div>

                <div className={cx('product-detail')}>
                    <div className={cx('box-pro-detail')}>
                        <h3 className={cx('pro-name')}>
                            <Button to={data.to} className={cx('pro-name-link')}>
                                {data.content}
                            </Button>
                        </h3>

                        <div className={cx('box-pro-prices')}>
                            <p className={cx('pro-price')}>
                                <span className={cx('highlight')}>{data.price}</span>
                                <span className={cx('pro-price-del')}>
                                    <del>{data.discount}</del>
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
