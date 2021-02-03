import React from 'react';
import cn from 'classnames';
import s from './button.module.scss';

const Button = (props) => {
  const { variant, block, className } = props;
  const classNames = cn(s.button, className, {
    [s[`button_${variant}`]]: variant,
    [s.button_block]: block
  });

  return (
    <button {...props} className={classNames} />
  );
}

export default Button;