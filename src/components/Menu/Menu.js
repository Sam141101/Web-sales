import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';

const cx = classNames.bind(styles);

function Menu({ children, item }) {
    // console.log(items.children);

    // console.log(item);
    console.log('22');
    // console.log(item.data);

    const renderItems = () => {
        return (
            <>
                {item.children.data.map((dt, index) => {
                    return (
                        <Button flagTitle={dt.title} key={index} className={cx('custom')} to={dt.to}>
                            {dt.content}
                        </Button>
                    );
                })}
            </>
        );
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('padding-left')}>{!!item.children && renderItems()}</Wrapper>
        </div>
    );
    return (
        <Tippy interactive visible render={renderResult} offset={[0, 58]} placement="bottom-start">
            {children}
        </Tippy>
    );
}

export default Menu;
