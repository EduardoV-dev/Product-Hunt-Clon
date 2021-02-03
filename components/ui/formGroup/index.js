import React from 'react';
import { Input } from '../index';
import s from './formGroup.module.scss';

const FormGroup = ({
  type,
  label,
  placeholder,
  autoComplete,
  name,
  onChange,
  value,
}) => {
  return (
    <div className={s.formGroup}>
      <label className={s.formGroup_label}>{label}</label>
      <Input
        {...{ type, placeholder, autoComplete, name, onChange, value }}
        className={s.formGroup_input}
      />
    </div>
  );
}

export default FormGroup;