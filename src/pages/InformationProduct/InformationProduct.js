import classNames from 'classnames/bind';
import styles from './InformationProduct.module.scss';

// import Button from '~/components/Button';
// import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';
import NavBar from '~/components/NavBar';
import DetailProduct from '~/components/DetailProduct';

const cx = classNames.bind(styles);

function InformationProduct() {
    return (
        <div className={cx('wrapper')}>
            <NavBar />

            <div className={cx('product-detail-wrapper')}>
                <DetailProduct />
            </div>
        </div>
    );
}

export default InformationProduct;
