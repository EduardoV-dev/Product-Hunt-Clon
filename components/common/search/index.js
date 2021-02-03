import React from 'react';
import { SearchIcon } from '../../icons';
import { Input, Button } from '../../ui';
import s from './search.module.scss';

const Search = () => {
  return (
    <form className={s.group}>
      <Input
        type='text'
        placeholder='Buscar productos'
      />
      <Button
        type='submit'
        variant='secondary'
        className={s.button}
      >
        <SearchIcon />
      </Button>
    </form>
  );
}

export default Search;