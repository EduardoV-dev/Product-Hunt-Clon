import React from 'react';
import s from './input.module.scss';
import cn from 'classnames';

const Input = (props) => {
  const { className } = props;
  const classNames = cn(s.input, className);

  return (  
    <input {...props} className={classNames} />
  );
}
 
export default Input;