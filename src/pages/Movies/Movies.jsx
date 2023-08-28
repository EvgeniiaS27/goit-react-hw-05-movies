import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/getMovies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [moveis, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);
    getSearchMovies(query)
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(new Error(`Oops, something went wrong...`));
        } else return res.json();
      })
      .then(data => {
        if (data.length !== 0) {
          return setMovies(data.results);
        } else
          return Promise.reject(
            new Error(`Oops, something went wrong... Please try again`)
          );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSearchQuery = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <h1>Movies Page</h1>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      {<SearchBar onSubmit={handleSearchQuery} />}
      {<MoviesList movies={moveis} />}
    </main>
  );
};
export default Movies;
