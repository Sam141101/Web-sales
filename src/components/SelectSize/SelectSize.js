import classNames from 'classnames/bind';
import styles from './SelectSize.module.scss';

import { useRef, useState, useEffect } from 'react';

import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';
import FakeDetailProduct from '~/FakeSP/FakeDetailProduct';

const cx = classNames.bind(styles);

const sizes = [{ size: 'M' }, { size: 'L' }, { size: 'S' }];

function SelectSize() {
    const [select, setSelect] = useState(sizes[0]);

    // const handleSize = () => {
    //     setSelect(true);
    // };

    // useEffect(() =>)

    return (
        <>
            {sizes.map((type, index) => {
                console.log(type);
                return (
                    <div key={index} className={cx('select-swap')}>
                        <div className={cx('swatch-element')}>
                            <div
                                onClick={() => setSelect(type)}
                                className={cx('swatch-block', `${select === type ? 'sd' : ''}`)}
                            >
                                <span>{type.size}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default SelectSize;
