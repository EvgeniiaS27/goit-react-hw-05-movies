import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <NavLink to={`movies/${id}`}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
