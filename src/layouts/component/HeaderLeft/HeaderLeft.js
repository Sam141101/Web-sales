import classNames from 'classnames/bind';
import styles from './HeaderLeft.module.scss';

const cx = classNames.bind(styles);

function HeaderLeft() {
    return <div className={cx('wrapper')}>HeaderLeft</div>;
}

export default HeaderLeft;
