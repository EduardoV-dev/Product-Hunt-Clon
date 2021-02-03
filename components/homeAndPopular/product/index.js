import React from 'react';
import s from './product.module.scss';
import { Image } from '../../ui';
import { CommentaryIcon } from '../../icons';

const Product = () => {
  return (
    <article className={s.product}>
      <div className={s.product_data}>
        <Image
          src='https://via.placeholder.com/300'
          alt='Article Image'
        />
        <div className={s.product_info}>
          <p className={s.product_user}>
            Eduardo
          </p>
          <p className={s.product_description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui placeat fuga modi officiis possimus maxime sit doloribus sed dicta voluptas, officia odio laudantium ipsum cumque tempore nobis expedita harum eaque.
            </p>
          <div className={s.product_comments}>
            <CommentaryIcon />
            <p className={s.product_comments_quantity}>
              125 Comentarios
              </p>
          </div>
          <p className={s.product_time}>
            Publicado hace: 3 días
            </p>
        </div>
      </div>
      <div className={s.product_voting}>
        <span className={s.product_icon}>&#9650;</span>
        <p className={s.product_votes}>53</p>
      </div>
    </article>
  );
}

export default Product;