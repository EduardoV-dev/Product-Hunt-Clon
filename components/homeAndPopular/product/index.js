import React from 'react';
import s from './product.module.scss';
import { Image } from '../../ui';
import { CommentaryIcon } from '../../icons';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const Product = ({ post }) => {
  const { product, image, description, createdAt } = post;

  return (
    <article className={s.product}>
      <div className={s.product_data}>
        <Image
          src={image}
          alt='Article Image'
        />
        <div className={s.product_info}>
          <p className={s.product_user}>
            {product}
          </p>
          <p className={s.product_description}>
            {description}
          </p>
          <div className={s.product_comments}>
            <CommentaryIcon />
            <p className={s.product_comments_quantity}>
              125 Comentarios
            </p>
          </div>
          <p className={s.product_time}>
            Publicado hace: {formatDistanceToNow(createdAt, { locale: es })}
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