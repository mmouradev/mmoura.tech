import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: #ffffff;
  display: flex;
  text-decoration: none;
  &:hover {
    color: #2195cf;
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  background: #2c2c2c;
  border-bottom: 1px solid #232323;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  z-index: -1;

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : '#2195cf')};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan('large')`
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    margin-bottom: 0.7rem;
    border-radius: 0px;
    padding: 0.2rem 0.5rem;
  `}
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
  margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
