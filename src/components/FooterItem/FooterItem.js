import classNames from 'classnames/bind';
import styles from './FooterItem.module.scss';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function FooterItem({ data, disabled }) {
    const value = data;

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('footer-title')}>{data[0]}</h4>
            <div className={cx('footer-list')}>
                {value.map((item, index) => {
                    return (
                        <div className={cx('footer-block')} key={index}>
                            {!!item.flag && <img src={item.icon} />}
                            <Button disabled to={item.to} className={cx('item')}>
                                {item.content}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FooterItem;
