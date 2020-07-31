import React from 'react';
import { Link } from 'react-router-dom';

import './list-poster.styles.scss';

export default function ListPoster({ imageUrl, title, id }) {
  return (
    <Link to={`/details/${id}`}>
      <img
        className="list-poster-img"
        src={
          imageUrl
            ? `https://image.tmdb.org/t/p/w185/${imageUrl}`
            : 'https://via.placeholder.com/185x273.png?text=?'
        }
        alt={title}
        title={title}
      />
    </Link>
  );
}
