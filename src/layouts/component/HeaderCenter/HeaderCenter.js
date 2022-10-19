import classNames from 'classnames/bind';
import styles from './HeaderCenter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Menu, MenuItem } from '~/components/Menu';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function HeaderCenter({ items }) {
    // console.log(text);

    // const handle = (item) => {

    //     console.log(item.children.data.children);

    //     return item.children.data.map((t) => {
    //         let valueItem = item.children.data[t];
    //         console.log(valueItem);

    //         return valueItem;
    //     });
    // };

    console.log(items);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-list')}>
                {items.map((item, index) => (
                    // <Tippy
                    // placement="right"
                    //     offset={[0, 13]}
                    //     delay={[0, 500]}
                    //     // visible
                    //     interactive
                    //     render={renderResult}
                    // >
                    // <Menu item={handle(item)}>
                    <Menu item={item} key={index}>
                        <div key={index}>
                            <MenuItem data={item} key={item.id} />
                        </div>
                    </Menu>
                    // </Menu>
                ))}
                {/* </Tippy> */}
            </div>
        </div>
    );
}

export default HeaderCenter;
