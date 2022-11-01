import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import Product from '~/components/Product';

import FakeSP from '~/FakeSP';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Pagination(props) {
    const { pagination, onPageChange } = props;

    const { page, limit, totalRows } = pagination;
    const totalPages = Math.ceil(totalRows / limit);

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    return (
        <div>
            <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
                Prev
            </button>

            <button disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
