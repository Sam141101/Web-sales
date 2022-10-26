import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

// import { SearchIcon } from '../Icon';
import Wrapper from '../Popper/Wrapper';
import ClothesItem from '~/components/ClothesItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const CLOTHERS_LIST = [
    {
        id: 1,
        content: 'TOPS',
        img: 'https://product.hstatic.net/200000312481/product/d0fe8e24-288c-4d58-8856-538005b0421d_ef50223e4dcf45df9e871bc4cacc98dd_compact.jpeg',
        flag: false,
        to: '/en',
    },

    {
        id: 2,
        content: 'BOTTOM',
        img: 'https://product.hstatic.net/200000312481/product/e16a5bce-1e12-4cb0-ac26-4245d7b57d87_3ef8677aac06462c91921d712170b703_compact.jpeg',

        flag: false,
        to: '/en',
    },

    {
        id: 3,
        content: 'ACCESSORIES',
        img: 'https://product.hstatic.net/200000312481/product/d04dea0c-5c9f-4e05-b701-f7103c1d93f7_e3b0480ccb3c417d9dd6386879c81fa9_grande.jpeg',
        flag: false,
        to: '/en',
    },
];

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true);

    const flagSP = true;

    const inputRef = useRef();

    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult([1, 2, 3]);
        // }, 0);
    }, []);

    const handleClear = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom-start"
            offset={[0, 0]}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('search-wrapper')}>
                        {CLOTHERS_LIST.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ClothesItem data={item} />
                                </div>
                            );
                        })}

                        {flagSP ? (
                            <div className={cx('resultsMore')}>
                                <Button href="#">Xem thêm 73 sản phẩm</Button>
                            </div>
                        ) : (
                            <div className={cx('resultsMore')}>
                                <p>Không có sản phẩm nào...</p>
                            </div>
                        )}
                    </Wrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder="Tìm kiếm sản phẩm..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    spellCheck={false}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                    // ref={inputRef}
                />

                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
