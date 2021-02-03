import React from 'react';
import s from './figure.module.scss';

const Figure = ({
  src, 
  alt
}) => {
  return (  
    <figure className={s.figure}>
      <img {...{src, alt}} className={s.figure_img} />
    </figure>
  );
}
 
export default Figure;