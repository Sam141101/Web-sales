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

    const title = cx({
        smallFlagTitle,
        color,
    });

    // let title = cx({falg ? smallFlagTitle : bigFlagTitle})

    // if(falg) {
    //     title = cx('smallFlagTitle')
    // } else {
    //     title = cx('bigFlagTitle')
    // }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            {flagTitle && <span className={title}>{flagTitle}</span>}
        </Comp>
    );
}

export default Button;

// const Image = forwardRef(({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
//     const [fallback, setFallback] = useState('');

//     const handleError = () => {
//         setFallback(customFallBack);
//     };

//     return (
//         <img
//             className={classNames(styles.wrapper, className)}
//             ref={ref}
//             alt={alt}
//             src={fallback || src}
//             {...props}
//             onError={handleError}
//         />
//     );
// });
