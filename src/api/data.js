export const listFetcher = async (url, params) => {
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_API_URL}${url}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&include_video=false${params}`
  );
  const json = await response.json();
  return json.results;
};

export const detailFetcher = async (url) => {
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_API_URL}${url}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const json = await response.json();
  return json;
};
