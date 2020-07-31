import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

import { listFetcher } from '../../api/data';

import ListPoster from '../list-poster/list-poster.component';

import './search-movies.styles.scss';

const ratingMap = {
  0: { min: 0, max: 10 },
  1: { min: 0, max: 2 },
  2: { min: 2, max: 4 },
  3: { min: 4, max: 6 },
  4: { min: 6, max: 8 },
  5: { min: 8, max: 10 },
};

function SearchMovies({ searchQuery }) {
  const [filtered, setFiltered] = useState([]);
  const [rating, setRating] = useState(0);
  const { data } = useSWR(
    ['/search/movie', `&query=${searchQuery}`],
    listFetcher
  );

  const onClickStar = (selectedRating) => {
    if (selectedRating === rating) return setRating(0);
    setRating(selectedRating);
  };

  useEffect(() => {
    setFiltered(
      data.filter(
        ({ vote_average }) =>
          vote_average >= ratingMap[rating].min &&
          vote_average <= ratingMap[rating].max
      )
    );
  }, [data, rating]);

  return (
    <>
      <h2>
        <span role="img" aria-label="search">
          🔍
        </span>{' '}
        Search Results for: <strong>{searchQuery}</strong>
      </h2>
      <h3>Filter by rating</h3>
      <ul class="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <li class="rating-stars__item">
            <button
              onClick={() => onClickStar(star)}
              className={rating >= star ? null : 'inactive'}
            >
              <span role="img" aria-label={`${star} star`}>
                ⭐
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length ? (
        <ul class="movie-list">
          {filtered.map(({ id, poster_path, title }) => {
            return (
              <li key={id} class="movie-list__item">
                <ListPoster imageUrl={poster_path} title={title} id={id} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>Nothing to see here</h2>
      )}
    </>
  );
}

export default SearchMovies;
