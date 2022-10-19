import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '../Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        green: data.green,
    });

    console.log(data.green);

    return (
        <Button className={classes} rightIcon={data.icon} to={data.to}>
            {data.content}
        </Button>
    );
}

export default MenuItem;
