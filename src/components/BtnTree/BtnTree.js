import classNames from 'classnames/bind';
import styles from './BtnTree.module.scss';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
// import Image from '~/components/Image';
// import images from '~/assets/images';
// import Product from '~/components/Product';
import NavBar from '~/components/NavBar';
import DetailProduct from '~/components/DetailProduct';

const cx = classNames.bind(styles);

function BtnTree({ explorer, className }) {
    const [expand, setExpand] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <Button
                to={explorer.to}
                rightIcon={explorer.icon}
                className={cx('btn-tree-menu')}
                onClick={() => setExpand(!expand)}
                mb
            >
                {explorer.name}
            </Button>

            <div
                style={{
                    display: expand ? 'block' : 'none',
                    paddingLeft: 15,
                }}
            >
                {explorer.items.map((explore) => (
                    <div className={cx('btn-tree-item')}>
                        <BtnTree key={explore.name} explorer={explore} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BtnTree;
