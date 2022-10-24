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
    const renderItems = () => {
        return (
            <>
                {item.map((dt, index) => {
                    return (
                        <Button active key={index} to={dt.to}>
                            {dt.content}
                        </Button>
                    );
                })}
            </>
        );
    };

    console.log(item[0]);

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <Wrapper>{renderItems()}</Wrapper>
        </div>
    );
    return (
        <div>
            <Tippy
                interactive
                visible
                placement="bottom-start"
                offset={[0, 0]}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4 className={cx('text')}>Accounts</h4>
                            {/* <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem /> */}
                        </Wrapper>
                    </div>
                )}
            >
                {/* {children} */}
            </Tippy>

            <Tippy interactive visible render={renderResult} offset={[0, 0]} placement="bottom-start">
                {children}
            </Tippy>
        </div>
    );
}
export default ShopList;
