import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../ui';
import s from './postAside.module.scss';
import { openURL } from '../../../utils/post';

const postAside = () => {
  const { selectedPost } = useSelector(state => state.post);
  if (!selectedPost) return null;
  const { votes, url } = selectedPost; 

  return ( 
    <div className={s.postAside}>
      <Button
        variant='primary'
        block='true'
        onClick={() => openURL(url)}
      >
        Visitar URL
      </Button>
      <p className={s.postAside_votes}>
        {votes.length} Votos
      </p>
      <Button
        variant='secondary'
        block='true'
      >
        Votar
      </Button>
    </div>
  );
}
 
export default postAside;