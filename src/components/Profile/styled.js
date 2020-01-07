import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWrapper = styled.section`
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #2195cf;
  }

  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan('large')`
    font-size: 1.1rem;
    margin: 0 0 0 10px
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  text-transform: initial;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 0.9rem
    margin-top: 0.2rem;
  `}
`;
