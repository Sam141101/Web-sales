import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';

// import MenuItem from './MenuItem';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import MegaItem from '~/components/MegaItem';

const cx = classNames.bind(styles);

function Menu({ children, item }) {
    const renderItems = () => {
        return (
            <>
                {item.children.data.map((dt, index) => {
                    return (
                        <Button active flagTitle={dt.title} key={index} className={cx('custom')} to={dt.to}>
                            {dt.content}
                        </Button>
                    );
                })}
            </>
        );
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            {item.wrapper ? (
                <>
                    <Wrapper wrapperbig className={cx('padding-left-1', 'center')}>
                        <MegaItem />
                    </Wrapper>
                </>
            ) : (
                <>
                    <Wrapper wrappersmall className={cx('padding-left')}>
                        {!!item.children && renderItems()}
                    </Wrapper>
                </>
            )}
        </div>
    );
    return (
        <>
            {item.flag ? (
                <>{children}</>
            ) : (
                <>
                    {item.wrapper ? (
                        <>
                            <Tippy
                                className={cx('placement')}
                                interactive
                                // visible
                                render={renderResult}
                                offset={item.num ? [-130, 0] : [-250, 0]}
                                // offset={[-100, 0]}
                                // placement={item.wrapper ? 'bottom-' : 'bottom-start'}
                                // placement="bottom-start"
                                // distance="2000"
                            >
                                {children}
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Tippy
                                className={cx('placement')}
                                interactive
                                // visible
                                render={renderResult}
                                // offset={item.wrapper ? [-50, 0] : [0, 0]}
                                offset={[0, 0]}
                                // placement={item.wrapper ? 'bottom-' : 'bottom-start'}
                                placement="bottom-start"
                                // distance="2000"
                            >
                                {children}
                            </Tippy>
                        </>
                    )}
                </>
            )}
        </>

        // <Tippy interactive visible render={renderResult} offset={[0, 58]} placement="bottom-start">
        //     {children}
        // </Tippy>
    );
}

export default Menu;
