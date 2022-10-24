import classNames from 'classnames/bind';
import styles from './PolicyItem.module.scss';

import Button from '../Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const ITEM_POLICY = [
    {
        id: 1,
        title: 'Hotline mua hàng',
        alt: 'Phone',
        content: 'Gọi ngay: 086 2642568‬',
        img: images.phone,
    },

    {
        id: 2,
        title: 'Giao hàng tận nơi',
        alt: 'Delivery',
        content: 'Miễn phí từ 5 sản phẩm',
        img: images.delivery,
    },

    {
        id: 3,
        title: '1 Đổi 1 nếu lỗi hàng',
        alt: 'Change',
        content: 'Trong vòng 7 ngày',
        img: images.policy,
    },
];

function PolicyItem() {
    console.log(ITEM_POLICY);
    return (
        <div className={cx('wrapper', 'pd15')}>
            <>
                {ITEM_POLICY.map((dt) => {
                    return (
                        <div key={dt.id} className={cx('header-policy-item')}>
                            <Image className={cx('icon-policy')} alt={dt.alt} src={dt.img} />

                            <div className={cx('policy-content')}>
                                <p>{dt.title}</p>
                                <span>{dt.content}</span>
                            </div>
                        </div>
                    );
                })}
            </>
        </div>
    );
}

export default PolicyItem;
