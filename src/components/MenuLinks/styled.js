import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav``;

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

export const MenuLinksLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #2195cf;
  }
`;
