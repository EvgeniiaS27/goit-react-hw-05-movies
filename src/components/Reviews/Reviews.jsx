import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovies';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(new Error(`Oops, something went wrong...`));
        } else return res.json();
      })
      .then(data => {
        if (data.length !== 0) {
          return setReviews(data.results);
        } else
          return Promise.reject(
            new Error(`Oops, something went wrong... Please try again`)
          );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      {!reviews
        ? 'We don`t have any reviews for his movie'
        : reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <b>Author: {author}</b>
                <p>{content}</p>
              </li>
            );
          })}
    </div>
  );
};
