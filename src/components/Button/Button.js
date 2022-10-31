import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    active = false,
    smallFlagTitle,
    to,
    color,
    // green = false,
    flagTitle,
    primary = false,
    href,
    disabled = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    mb = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        active,
        // green,
        disabled,
        [className]: className,
    });

    const title = cx('icon', {
        mb,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx(title)}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx(title)}>{rightIcon}</span>}
            {flagTitle && <span className={title}>{flagTitle}</span>}
        </Comp>
    );
}

export default Button;
