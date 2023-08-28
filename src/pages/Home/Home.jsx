import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/getMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [moviesTrand, setMoviesTrand] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(new Error(`Oops, something went wrong...`));
        } else return res.json();
      })
      .then(data => {
        if (data.results.length !== 0) {
          return setMoviesTrand(data.results);
        } else
          return Promise.reject(new Error(`Oops, something went wrong...`));
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Tranding today</h1>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}

      {<MoviesList movies={moviesTrand} />}
    </main>
  );
};
export default Home;
