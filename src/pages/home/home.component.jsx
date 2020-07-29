import React, { useState, Suspense } from 'react';
import debounce from 'lodash.debounce';

import FeaturedMovies from '../../components/featured-movies/featured-movies.component';
import SearchMovies from '../../components/search-movies/search-movies.component';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const debounceSetSearchQuery = debounce((value) => {
    setSearchQuery(value);
  }, 1000);

  return (
    <>
      <input
        type="text"
        placeholder="Search movies"
        onChange={(e) => debounceSetSearchQuery(e.target.value)}
      />
      <Suspense fallback={<h1>Loading</h1>}>
        {searchQuery ? (
          <SearchMovies searchQuery={searchQuery} />
        ) : (
          <FeaturedMovies />
        )}
      </Suspense>
    </>
  );
}
