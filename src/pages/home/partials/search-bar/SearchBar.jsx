import React from 'react';
import { Input } from 'antd';
import './styles/search-bar.scss';
import { debounce } from 'lodash';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [, setSearchParams] = useSearchParams();
  const request = debounce(async (searchTerm) => {
    if (searchTerm === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ search: searchTerm });
  }, 500);

  const debounceTextRequest = (searchTerm) => {
    request(searchTerm);
  };

  return (
    <div className="SearchBar_cntr">
      <Input.Search
        placeholder="Search name or email"
        size="large"
        onChange={(e) => debounceTextRequest(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
