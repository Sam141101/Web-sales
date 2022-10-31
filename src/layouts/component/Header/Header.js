import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import TopBar from '~/components/TopBar';
// import HeaderLeft from '../HeaderLeft';
// import HeaderCenter from '../HeaderCenter';
// import HeaderRight from '../HeaderRight';
import images from '~/assets/images';
import HeaderItem from '~/components/HeaderItem';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <TopBar />
            <HeaderItem />
        </header>
    );
}

export default Header;
