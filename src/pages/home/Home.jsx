import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import List from './partials/List/List';
import './styles/home.scss';
import Navbar from './partials/navbar';
import SearchBar from './partials/search-bar';
import { useData } from '../../hooks/DataContext';

function Home() {
  const { page, onSearchHandler, filteredUsers, loadMoreHandler } = useData();

  useEffect(() => {
    document.title = 'Home - ContactU';
  }, []);

  return (
    <div className="Home_cntr">
      <Navbar />
      <SearchBar onSearchHandler={onSearchHandler} />
      <div className="UserLists_cntr">
        <InfiniteScroll
          loadMore={loadMoreHandler}
          threshold={20}
          pageStart={page.page}
          hasMore={page.page < page.total_pages}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {filteredUsers?.length > 0 ? (
            <List users={filteredUsers} />
          ) : (
            <p className="UserLists_empty">Empty data</p>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Home;
