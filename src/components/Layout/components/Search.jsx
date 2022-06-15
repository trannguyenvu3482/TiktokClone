import { useState, useEffect } from 'react';
import styled from 'styled-components';

import HeadlessTippy from '@tippyjs/react/headless';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';
import { variables as globalVars, Popper, AccountItem } from '~/components';
import { SearchIcon } from '~/components/Icons';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1, 2, 3]);
    }, 0);
  });

  return (
    <Wrapper>
      <HeadlessTippy
        visible={searchResults.length > 0}
        interactive={true}
        render={(attrs) => (
          <div className="search-result" tabIndex={1} {...attrs}>
            <Popper>
              <h4 className="search-title">Accounts</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </Popper>
          </div>
        )}
      >
        <div className="search">
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck="false"
          />
          <button className="clear">{<IoMdCloseCircle />}</button>
          <FaSpinner className="loading" />
          <button className="search-btn">{<SearchIcon />}</button>
        </div>
      </HeadlessTippy>
    </Wrapper>
  );
};

// Styling
const localVars = {
  searchBorderRadius: 92,
  searchHeight: 46,
  searchTopSpacer: 6,
  searchButtonWidth: 52,
};

const Wrapper = styled.div`
  .search,
  .search-result {
    width: 361px;
  }

  .search {
    position: relative;
    display: flex;
    width: 361px;
    height: 46px;
    background-color: rgba(22, 24, 35, 0.06);
    border-radius: ${localVars.searchBorderRadius}px;
    padding-left: 16px;
    border: 1.5px solid transparent;

    input {
      flex: 1;
      height: 100%;
      padding: 12px 0;
      color: ${globalVars.black};
      font-size: 1.6rem;
      background-color: transparent;
      caret-color: red;
    }

    input:not(:placeholder-shown) ~ .search-btn {
      color: rgba(22, 24, 35, 0.75);
    }

    .clear,
    .loading {
      position: absolute;
      right: calc(${localVars.searchButtonWidth}px + 16px);
      top: 50%;
      transform: translateY(-50%);
      color: rgba(22, 24, 35, 0.34);
      font-size: 16px;
    }

    .search-btn {
      width: ${localVars.searchButtonWidth}px;
      height: 100%;
      border-top-right-radius: ${localVars.searchBorderRadius}px;
      border-bottom-right-radius: ${localVars.searchBorderRadius}px;
      font-size: 1.8rem;
      color: rgba(22, 24, 35, 0.34);

      :hover {
        background-color: rgba(22, 24, 35, 0.03);
        cursor: pointer;
      }

      :active {
        background-color: rgba(22, 24, 35, 0.06);
      }
    }

    ::after {
      content: '';
      position: absolute;
      height: calc(${localVars.searchHeight}px - 16px);
      width: 1px;
      top: ${localVars.searchTopSpacer}px;
      right: ${localVars.searchButtonWidth}px;
      background-color: rgba(22, 24, 35, 0.12);
    }

    :focus-within {
      border-color: rgba(22, 24, 35, 0.2);
    }
  }

  .search-title {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 5px 12px;
    color: rgba(22, 24, 35, 0.5);
  }
`;

export default Search;