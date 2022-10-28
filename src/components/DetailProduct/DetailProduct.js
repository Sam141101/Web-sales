import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

import { useRef, useState, useEffect } from 'react';

import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';
import FakeDetailProduct from '~/FakeSP/FakeDetailProduct';
import SelectSize from '~/components/SelectSize';
import SelectQuantity from '~/components/SelectQuantity';
import DescribeProduct from '~/components/DescribeProduct';

const cx = classNames.bind(styles);

function DetailProduct() {
    const fake = FakeDetailProduct;

    const [product, setProduct] = useState(fake[0].img);

    // const [active, setActive] = useState(fake[0].img);

    const handleProduct = (item) => {
        setProduct(item.img);
        // setActive(item.img);
    };

    // useEffect(() => {
    //     return () => {
    //         setActive(false);
    //     };
    // }, [active]);

    return (
        <div className={cx('container-fluid')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l12')}>
                    <div className={cx('row', 'product-detail-main')}>
                        <div className={cx('col', 'l5', 'product-content-img')}>
                            <div className={cx('product-gallery')}>
                                <div className={cx('product-gallery__thumbs-container')}>
                                    <div className={cx('product-gallery__list')}>
                                        {fake.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={() => handleProduct(item)}
                                                    key={index}
                                                    className={cx(
                                                        'product-gallery__thumb',
                                                        `${product === item.img ? 'active' : ''}`,
                                                    )}
                                                >
                                                    {/* <a href="#"> */}
                                                    <Image
                                                        key={index}
                                                        className={cx('product-gallery__img')}
                                                        src={item.img}
                                                    />
                                                    {/* </a> */}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className={cx('product-image-detail')}>
                                    <div className={cx('slide_product')}>
                                        <Image className={cx('product-gallery__img')} src={product} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col', 'l7')}>
                            <div className={cx('product-title')}>
                                <h1>.SIGNATURE SEASON 2022 HOODIE / BLACK COLOR</h1>
                                <span>SKU: ORT.B 201 - S</span>
                            </div>

                            <div className={cx('product-price')}>
                                <span className={cx('pro-sale')}>-38%</span>
                                <span className={cx('pro-sale')}>299,000₫</span>
                                <del>480,000₫</del>
                            </div>

                            <form>
                                <div className={cx('clearfix')}>
                                    <div className={cx('swatch')}>
                                        <SelectSize />
                                    </div>

                                    <div className={cx('selector-actions')}>
                                        <SelectQuantity />

                                        <div className={cx('wrap-addcart')}></div>
                                    </div>
                                </div>
                            </form>

                            <DescribeProduct />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
