import { useState } from 'react';
// import css from './Searchbar.module.css';
import { Button } from 'components/Button/Button';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введите запрос в поле поиска');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={query}
        onChange={handleChangeInput}
        placeholder="Search images and photos"
      />

      <Button type="submit">Search</Button>
    </form>
  );
};
