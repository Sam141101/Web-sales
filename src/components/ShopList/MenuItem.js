import classNames from 'classnames/bind';
import styles from './ShopList.module.scss';

import Tippy from '@tippyjs/react/headless';

import Button from '../Button';
import Wrapper from '../Popper/Wrapper';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    // const classes = cx('menu-item', {
    //     green: data.green,
    // });

    const renderItems = () => {
        return (
            <div className={cx('menu')}>
                {data.children.map((dt, index) => {
                    return (
                        // <ShopList>
                        <div className={cx('menu-list')} key={index}>
                            <Button className={cx('custom')} to={dt.to}>
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
            <Wrapper className={cx('margin-top-2px')}>{renderItems()}</Wrapper>
        </div>
    );

    return (
        <Tippy interactive render={renderResult} offset={[0, 0]} placement="right-start">
            <div key={data.id}>
                <Button className={cx('custom')} rightIcon={data.icon} key={data.id} to={data.to}>
                    {data.content}
                </Button>
            </div>
        </Tippy>
    );
}

export default MenuItem;
