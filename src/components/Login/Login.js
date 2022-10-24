import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import images from '~/assets/images';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper', 'pd15')}>
            <div className={cx('header-login')}>
                <Image className={cx('user-avatar')} alt="No-login" src={images.noSign} />

                <span className={cx('box-text')}>
                    <span className={cx('text')}>Đăng nhập / Đăng ký</span>
                    <span className={cx('txtbl')}>
                        Tài khoản của tôi
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Login;
