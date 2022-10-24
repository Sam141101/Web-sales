import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ className, wrappersmall = false, wrapperbig = false, children, ...passProps }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return <div className={classes}>{children}</div>;
}

export default Wrapper;
