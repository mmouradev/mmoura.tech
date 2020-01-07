import React from 'react';

import * as S from './styled';

import PostItem from '../PostItem';

const PostBlog = () => (
  <>
    <S.PostBlogTitle>Blog</S.PostBlogTitle>
    <PostItem
      slug="/about/"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </>
);

export default PostBlog;
