import React, { useState, Suspense } from 'react';
import debounce from 'lodash.debounce';

import FeaturedMovies from '../../components/featured-movies/featured-movies.component';
import SearchMovies from '../../components/search-movies/search-movies.component';

import './home.styles.scss';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const debounceSetSearchQuery = debounce((value) => {
    setSearchQuery(value);
  }, 1000);

  return (
    <>
      <header className="home-header">
        <h1>Welcome to Rockstar Movies</h1>
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => debounceSetSearchQuery(e.target.value)}
        />
      </header>
      <div className="home-content">
        {/* TODO: add propper loading treatment */}
        <Suspense fallback={<h1>Loading</h1>}>
          {searchQuery ? (
            // TODO: it would be a good idea to pass this as URL params so it's easier to go back to search
            <SearchMovies searchQuery={searchQuery} />
          ) : (
            <FeaturedMovies />
          )}
        </Suspense>
      </div>
    </>
  );
}
