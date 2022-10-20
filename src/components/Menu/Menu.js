import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Menu({ children, item }) {
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
        // <>
        //     {item.type ? (
        //         <>
        //             <Image alt={item.alt} className={cx('user-avatar')} src={item.src} />
        //         </>
        //     ) : (
        //         <>
        //             <Tippy interactive visible render={renderResult} offset={[0, 58]} placement="bottom-start">
        //                 {children}
        //             </Tippy>
        //         </>
        //     )}
        // </>

        <>
            {item.flag ? (
                <>{children}</>
            ) : (
                <>
                    <Tippy interactive visible render={renderResult} offset={[0, 0]} placement="bottom-start">
                        {children}
                    </Tippy>
                </>
            )}
        </>

        // <Tippy interactive visible render={renderResult} offset={[0, 58]} placement="bottom-start">
        //     {children}
        // </Tippy>
    );
}

export default Menu;
