import React from 'react';
import useProduct from '../../hooks/custom/useProduct';
import { Button, FormGroup } from '../ui';
import s from './newProduct.module.scss';

const NewProduct = () => {
  const { productInput, handleOnChange } = useProduct({
    product: '',
    enterprise: '',
    image: null,
    url: '',
    description: '',
  });

  const { product, enterprise, image, url, description } = productInput;

  return (
    <>
      <h2 className={s.product_heading}>Nuevo producto</h2>
      <form className={s.product_form}>
        <fieldset className={s.product_fieldset}>
          <legend className={s.product_legend}>Información general</legend>
          <FormGroup
            type='text'
            placeholder='Nombre del producto o post'
            label='Nombre'
            autoComplete='off'
            name='product'
            value={product}
            onChange={handleOnChange}
          />
          <FormGroup
            type='text'
            placeholder='Nombre de la empresa o compañía'
            label='Empresa'
            autoComplete='off'
            name='enterprise'
            value={enterprise}
            onChange={handleOnChange}
          />
          <FormGroup
            type='file'
            label='Imagen'
            name='image'
            onChange={handleOnChange}
          />
          <FormGroup
            type='url'
            placeholder='URL del producto'
            label='Nombre'
            autoComplete='off'
            name='url'
            value={url}
            onChange={handleOnChange}
          />
        </fieldset>
        <fieldset className={s.product_fieldset}>
          <legend className={s.product_legend}>Sobre tu producto</legend>
          <div className={s.product_formGroup}>
            <label className={s.product_label}>Descripción</label>
            <textarea
              className={s.product_textarea}
              name='description'
              rows='5'
              value={description}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </fieldset>
        <Button
          type='submit'
          variant='primary'
          block='true'
        >
          Crear Producto
        </Button>
      </form>
    </>
  );
}

export default NewProduct;