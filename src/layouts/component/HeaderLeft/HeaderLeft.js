import classNames from 'classnames/bind';
import styles from './HeaderLeft.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderLeft() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-call')}>
                <div className={cx('text')}>
                    Call Us Now
                    <span>0122 333 8889</span>
                </div>

                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
            </div>
        </div>
    );
}

export default HeaderLeft;
