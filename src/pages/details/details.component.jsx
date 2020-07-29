import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import useSWR from 'swr';

import { detailFetcher } from '../../api/data';

function DetailsPage({ match }) {
  const {
    data: { title, poster_path },
  } = useSWR(`/movie/${match.params.id}`, detailFetcher);

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Details page for {title}</h1>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : 'https://via.placeholder.com/300x450.png?text=?'
        }
        alt=""
      />
    </div>
  );
}

export default withRouter(DetailsPage);
