import React, { useEffect } from 'react';
import { Button, FormGroup } from '../ui';
import { Error } from '../common';
import useProduct from '../../hooks/useProduct';
import { handleClearErrorsLog, handleOnSubmit } from '../../redux/handlers/post';
import s from './newProduct.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const NewProduct = () => {
  const { user } = useSelector(state => state.auth);
  const { errors, loading } = useSelector(state => state.post);
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { productInput, handleOnChange } = useProduct({
    product: '',
    enterprise: '',
    image: null,
    url: '',
    description: '',
  });

  const handleLocalSubmit = async e => {
    try {
      await dispatch(handleOnSubmit(e, productInput, user));
      push('/');
    } catch (e) {
    }
  }

  useEffect(() => dispatch(handleClearErrorsLog()),[]);

  return (
    <>
      <h2 className={s.product_heading}>Nuevo producto</h2>
      <form className={s.product_form} noValidate
        onSubmit={handleLocalSubmit}
      >
        <fieldset className={s.product_fieldset}>
          <legend className={s.product_legend}>Información general</legend>
          <FormGroup
            type='text'
            placeholder='Nombre del producto o post'
            label='Nombre'
            autoComplete='off'
            name='product'
            onChange={handleOnChange}
          />
          {errors.product && (
            <Error message={errors.product} />
          )}
          <FormGroup
            type='text'
            placeholder='Nombre de la empresa o compañía'
            label='Empresa'
            autoComplete='off'
            name='enterprise'
            onChange={handleOnChange}
          />
          {errors.enterprise && (
            <Error message={errors.enterprise} />
          )}
          <FormGroup
            type='file'
            label='Imagen'
            name='image'
            onChange={handleOnChange}
          />
          {errors.image && (
            <Error message={errors.image} />
          )}
          <FormGroup
            type='url'
            placeholder='URL del producto'
            label='URL'
            autoComplete='off'
            name='url'
            onChange={handleOnChange}
          />
          {errors.url && (
            <Error message={errors.url} />
          )}
        </fieldset>
        <fieldset className={s.product_fieldset}>
          <legend className={s.product_legend}>Sobre tu producto</legend>
          <div className={s.product_formGroup}>
            <label className={s.product_label}>Descripción</label>
            <textarea
              className={s.product_textarea}
              name='description'
              onChange={handleOnChange}
            ></textarea>
          </div>
          {errors.description && (
            <Error message={errors.description} />
          )}
        </fieldset>
        <Button
          type='submit'
          variant='primary'
          block='true'
          disabled={loading}
        >
          {loading ? 'Creando el producto...' : 'Crear Producto'}
        </Button>
      </form>
    </>
  );
}

export default NewProduct;