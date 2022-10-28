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
                    🔹 Chất lượng sản phẩm
                    <br />– Áp dụng engine cào lông mới giúp lông suôn mượt không xù
                    <br />
                    – Áp dụng quy trình hồ lạnh để giúp mặt vải suôn mượt
                    <br />– Định lượng : 320gsm / Phù hợp với khí hậu cả 2 miền Nam Bắc khi vào lạnh.
                </div>

                <div>
                    Gồm 3 size: S / M / L
                    <br />
                    🔹 Bảng size Outerity
                    <br />
                    S : Dài áo : 70cm. Dài tay : 75,5cm. Rộng : 56cm | 1m45 - 1m55, 35 - 45 kg
                    <br />
                    M : Dài áo : 73cm. Dài tay : 80,5cm. Rộng : 59cm | 1m55 - 1m65, 45 - 55Kg
                    <br />
                    L : Dài áo : 77cm. Dài tay : 85,5cn. Rộng: 62cm | 1m65 - 1m75 , 55Kg - 75Kg
                    <br />
                    👉 Nếu chưa biết lựa size bạn có thể inbox để được chúng mình tư vấn.
                </div>

                <div>
                    🔹 Chính sách đổi trả Outerity.
                    {/* <p> */}
                    <br />– Miễn phí đổi hàng cho khách mua ở Outerity trong trường hợp bị lỗi từ nhà sản xuất, giao
                    nhầm hàng, nhầm size.
                    {/* </p> */}
                    <br />
                    – Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay
                    cho Outerity trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết
                    khi không có video unbox.
                    <br />
                    – Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng
                    <br />– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác
                    nhân bên ngoài cửa hàng sau khi mua hàng.
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
