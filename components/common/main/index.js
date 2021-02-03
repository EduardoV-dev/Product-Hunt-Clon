import React from 'react';
import cn from 'classnames';
import s from './main.module.scss';

const Main = (props) => {
  const { main } = props;
  const classNames = cn({
    [s.main]: main
  });

  return (  
    <main {...props} className={classNames} />
  );
}
 
export default Main;