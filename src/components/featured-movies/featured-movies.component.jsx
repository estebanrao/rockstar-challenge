import React from 'react';
import useSWR from 'swr';

import ListPoster from '../list-poster/list-poster.component';

import { listFetcher } from '../../api/data';

export default function FeaturedMovies() {
  const { data } = useSWR(
    ['/discover/movie', '&sort_by=popularity.desc'],
    listFetcher
  );

  return (
    <>
      <h2>
        <span role="img" aria-label="featured">
          🔥
        </span>{' '}
        Featured Movies sorted by popularity
      </h2>
      <ul class="movie-list">
        {data.map(({ id, poster_path, title }) => {
          return (
            <li key={id} class="movie-list__item">
              <ListPoster imageUrl={poster_path} title={title} id={id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
