export const listFetcher = async (url, params) => {
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_API_URL}${url}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&include_video=false${params}`
  );
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json.results;
};

export const detailFetcher = async (url) => {
  const response = await fetch(
    `${process.env.REACT_APP_MOVIE_API_URL}${url}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
};
