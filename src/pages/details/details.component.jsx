import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import useSWR from 'swr';

import { detailFetcher } from '../../api/data';

import './details.styles.scss';

function DetailsPage({ match }) {
  const {
    data: { title, poster_path, genres, overview, vote_average, release_date },
  } = useSWR(`/movie/${match.params.id}`, detailFetcher);

  return (
    <div className="details-content">
      <h1>
        <Link to="/">
          <span role="img" aria-label="back">
            ⬅️
          </span>
        </Link>{' '}
        Details page for {title}
      </h1>
      <div className="details-content__data">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://via.placeholder.com/300x450.png?text=?'
          }
          alt="Movie Poster"
        />
        <dl>
          <dt>
            <h4>Release Date:</h4>
          </dt>
          <dd>{release_date}</dd>
          <dt>
            <h4>Overview:</h4>
          </dt>
          <dd>{overview ? overview : 'No overview provided'}</dd>
          <dt>
            <h4>Rating:</h4>
          </dt>
          <dd>{vote_average}</dd>
          <dt>
            <h4>Genres:</h4>
          </dt>
          <dd>
            {genres?.map((genre, index) => {
              return (index ? ', ' : '') + genre.name;
            })}
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default withRouter(DetailsPage);
