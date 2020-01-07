import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.8rem 0;
  .active {
    color: #2195cf;
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #2195cf;
  }
`;
