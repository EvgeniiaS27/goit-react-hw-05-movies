import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetailes } from 'services/getMovies';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieDetailes(movieId)
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(new Error(`Oops, something went wrong...`));
        } else return res.json();
      })
      .then(data => {
        if (data.length !== 0) {
          return setDetailsMovie(data);
        } else
          return Promise.reject(
            new Error(`Oops, something went wrong... Please try again`)
          );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const { title, genres, overview, poster_path } = detailsMovie;

  return (
    <main>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      <div>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : `https://via.placeholder.com/200x300`
            }
            alt="poster "
          />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres
              ? genres.map(genre => <span key={genre.id}>{genre.name}</span>)
              : ''}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};
export default MovieDetails;
