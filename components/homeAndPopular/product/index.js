import React from 'react';
import s from './product.module.scss';
import { Image } from '../../ui';
import { CommentaryIcon } from '../../icons';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';

const Product = ({ post }) => {
  const { id, product, image, description, createdAt, comments, votes } = post;

  return (
    <article className={s.product}>
      <div className={s.product_data}>
        <Image
          src={image}
          alt='Article Image'
        />
        <div className={s.product_info}>
          <Link href='/post/[id]' as={`/post/${id}`}>
            <p className={s.product_user}>
              {product}
            </p>
          </Link>
          <p className={s.product_description}>
            {description}
          </p>
          <div className={s.product_comments}>
            <CommentaryIcon />
            <p className={s.product_comments_quantity}>
              {comments.length} Comentarios
            </p>
          </div>
          <p className={s.product_time}>
            Publicado hace: {formatDistanceToNow(createdAt, { locale: es })}
          </p>
        </div>
      </div>
      <div className={s.product_voting}>
        <span className={s.product_icon}>&#9650;</span>
        <p className={s.product_votes}>{votes.length}</p>
      </div>
    </article>
  );
}

export default Product;