import classNames from 'classnames/bind';
import styles from './ClothesItem.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

// import { SearchIcon } from '../Icon';
import Wrapper from '../Popper/Wrapper';
import Image from '../Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ClothesItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <a href="#">BASIC SHORT / GREY COLOR</a>
                <p className={cx('f-initial')}>
                    189,000₫
                    <del>290,000₫</del>
                </p>
            </div>

            <a href="#" className={cx('thumbs')}>
                <Image
                    className={cx('img')}
                    src={data.img}
                    // alt={data.full_name}
                    // fallback="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/305205230_1753990181633414_2395548874737533677_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=9Dcj3kXYu70AX-61nie&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8gkhyEpzvz2ubPZRMOVK1l6bbKdP96nX4CSGLu7rdn7w&oe=63428567"
                />
            </a>
        </div>
    );
}

export default ClothesItem;
