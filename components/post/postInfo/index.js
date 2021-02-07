import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from '../../ui';
import s from './postInfo.module.scss';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const PostInfo = () => {
  const { selectedPost } = useSelector(state => state.post);
  if (!selectedPost) return null;

  const { postedBy, createdAt, image, description } = selectedPost;

  return (  
    <div className={s.post}>
      <p className={s.post_publishedBy}>Publicado por: {postedBy} · hace {formatDistanceToNow(createdAt, { locale: es })}</p>
      <Image
        className={s.post_img}
        src={image}
        alt='Post Image'
        post='true'
      />
      <p className={s.post_description}>
        {description}
      </p>
    </div>
  );
}
 
export default PostInfo;