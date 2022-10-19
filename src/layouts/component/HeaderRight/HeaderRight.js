import classNames from 'classnames/bind';
import styles from './HeaderRight.module.scss';

const cx = classNames.bind(styles);

function HeaderRight() {
    return <div className={cx('wrapper')}>HeaderRight</div>;
}

export default HeaderRight;
