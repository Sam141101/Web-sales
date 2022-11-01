import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import Product from '~/components/Product';

import FakeSP from '~/FakeSP';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const flag = true;

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList(FakeSP);
    }, []);

    return (
        <main className={cx('wrapper')}>
            <Button to="/shop" className={cx('item')}>
                <Image src={images.image_title} alt="Outerity" className={cx('home-img')} />
            </Button>

            <section className={cx('section')}>
                <div className={cx('wrapper-heading-home')}>
                    <div className={cx('container-fluid')}>
                        <h2 className={cx('heading-title')}>
                            <Button to="/onsale" className={cx('heading')}>
                                PRODUCT
                            </Button>
                        </h2>
                    </div>
                </div>

                <div className={cx('wrapper-collection-1')}>
                    <div className={cx('container-fluid')}>
                        <Product data={postList} flag={flag} colpc="l24" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
