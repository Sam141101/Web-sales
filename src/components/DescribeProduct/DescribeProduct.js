import classNames from 'classnames/bind';
import styles from './DescribeProduct.module.scss';

import { useRef, useState, useEffect } from 'react';

import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';
import FakeDetailProduct from '~/FakeSP/FakeDetailProduct';
import SelectSize from '~/components/SelectSize';
import SelectQuantity from '~/components/SelectQuantity';

const cx = classNames.bind(styles);

function DescribeProduct() {
    return (
        <div className={cx('wrapper', 'clearfix')}>
            <div className={cx('title')}>
                <h2>Mô tả</h2>
            </div>

            <div className={cx('content', 'clearfix')}>
                <div>
                    🔹 Chính sách đổi trả Outerity.
                    <p>
                        – Miễn phí đổi hàng cho khách mua ở Outerity trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm
                        hàng, nhầm size.
                    </p>
                    <p>
                        – Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo
                        ngay cho Outerity trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không
                        giải quyết khi không có video unbox.
                    </p>
                    {/* <p>– Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng</p>
                    <p>
                        – Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác
                        nhân bên ngoài cửa hàng sau khi mua hàng.
                    </p> */}
                </div>

                <div>
                    🔹Liên hệ: 0862642568
                    <p>/ Web / Outerity.com</p>
                    <p>/ IG / @Outerity.sg</p>
                    <p>/ FB / Outerity</p>
                </div>
            </div>
        </div>
    );
}

export default DescribeProduct;
