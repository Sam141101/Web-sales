import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import ProductItem from '../ProductItem';

const cx = classNames.bind(styles);

function Product({ className, l24 }) {
    // const classes = cx('col', {
    //     l24,

    //     [className]: className,
    // });

    return (
        <div className={cx('grid')}>
            <div className={cx('row', 'block')}>
                {/* <div className={cx('clearfix')}> */}
                <ProductItem l24 />
                <ProductItem l24 />
                {/* </div> */}

                <div className={cx('product__seemore')}>
                    <Button href="/" className={cx('button-more', 'drak')}>
                        Xem thêm
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Product;
