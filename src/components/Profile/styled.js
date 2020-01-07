import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #2195cf;
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0.5rem auto 1.5rem;
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  text-transform: initial;
  font-weight: 300;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;
