import classNames from 'classnames/bind';
import styles from './ShopList.module.scss';

import Tippy from '@tippyjs/react/headless';

// import MenuItem from './MenuItem';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ShopList({ children, item }) {
    const value = item;

    const renderItems = () => {
        return (
            <div className={cx('menu')}>
                {value.map((dt, index) => {
                    return (
                        // <ShopList>
                        <div className={cx('menu-list')}>
                            <Button className={cx('custom')} rightIcon={dt.icon} key={index} to={dt.to}>
                                {dt.content}
                            </Button>
                        </div>
                        // </ShopList>
                    );
                })}
            </div>
        );
    };

    const renderResult = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <Wrapper>{renderItems()}</Wrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive visible render={renderResult} offset={[0, -1]} placement="bottom-start">
                {children}
            </Tippy>
        </div>
    );
}
export default ShopList;
