import React from 'react';

import * as S from './styled';

import links from './content';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => {
        const { label, url } = link;

        return (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink to={url} activeClassName="active">
              {label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        );
      })}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
