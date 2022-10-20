import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '../Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        green: data.green,
    });

    let value = data.type;

    console.log(value);

    return (
        <Button className={classes} rightIcon={data.icon} to={data.to}>
            {data.content}
        </Button>

        // <>
        //     {value ? (
        //         <>
        //             <Image alt={data.alt} src={data.src} />
        //         </>
        //     ) : (
        //         <>
        //             <Button className={classes} rightIcon={data.icon} to={data.to}>
        //                 {data.content}
        //             </Button>
        //         </>
        //     )}
        // </>
    );
}

export default MenuItem;
