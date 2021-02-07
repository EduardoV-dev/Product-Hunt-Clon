import React from 'react';
import s from './figure.module.scss';
import cn from 'classnames';

const Figure = ({
  src, 
  alt, 
  className,
  post
}) => {
  const classNames = cn(s.figure_img, className);
  const figureClassNames = cn(s.figure, {
    [s.figure_postInfo]: post
  }); 

  return (  
    <figure className={figureClassNames}>
      <img {...{src, alt}} className={classNames} />
    </figure>
  );
}
 
export default Figure;