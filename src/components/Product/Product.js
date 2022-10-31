import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import ProductItem from '../ProductItem';

import FakeSP from '~/FakeSP';

const cx = classNames.bind(styles);

function Product({ className, l24, data, flag, colpc }) {
    // const classes = cx({
    //     l24,
    //     // l3,
    //     [className]: className,
    // });
    const SP = data;

    return (
        <div className={cx('grid')}>
            <div className={cx('row', 'block')}>
                {SP.map((item) => {
                    return <ProductItem key={item.id} data={item} colpc={colpc} />;
                })}

                {!!flag && (
                    <div className={cx('product__seemore')}>
                        <Button href="/" className={cx('button-more', 'drak')}>
                            Xem thêm
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;
