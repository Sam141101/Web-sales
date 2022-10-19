import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TopBar({ items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <div className={cx('language-item')} key={index}>
                    <Link to={item.to} className={cx('item')}>
                        {item.title}
                    </Link>
                </div>
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('language-list')} tabIndex="-1" {...attrs}>
            <div>{renderItems()}</div>
        </div>
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('actions')}>Work time: Monday - Friday: 08AM-06PM</div>
                <div className={cx('action-left')}>
                    <Tippy
                        placement="bottom"
                        offset={[0, 13]}
                        delay={[0, 500]}
                        // visible
                        interactive
                        render={renderResult}
                    >
                        <div>
                            <Button className={cx('actions')} rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                                Languages
                            </Button>
                        </div>
                    </Tippy>
                    <Button href="https://www.facebook.com/huy.sang.1232" className={cx('actions', 'pdr0')}>
                        Login / Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
