import classNames from 'classnames/bind';
import styles from './ShopList.module.scss';

import Tippy from '@tippyjs/react/headless';

import Button from '../Button';
import Wrapper from '../Popper/Wrapper';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        green: data.green,
    });

    const renderItems = () => {
        return (
            <div className={cx('menu')}>
                {data.map((dt, index) => {
                    return (
                        // <ShopList>
                        <div className={cx('menu-list')}>
                            <Button className={cx('custom')} key={index} to={dt.to}>
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
        <Tippy interactive render={renderResult} offset={[0, -1]} placement="bottom-start">
            <Button className={classes} rightIcon={data.icon} to={data.to}>
                {data.content}
            </Button>

            {/* <Button className={cx('custom')} rightIcon={dt.icon} key={index} to={dt.to}>
                                {dt.content}
                            </Button> */}
        </Tippy>
    );
}

export default MenuItem;
