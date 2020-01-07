import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;
  ${media.lessThan('large')`
    flex-direction: column;
    padding-top: 4.5rem;
  `}
`;

export const LayoutMain = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 2.5rem 4rem 0px 22rem;
  transition: background 0.5s ease 0s, color 0.5s ease 0s;

  ${media.lessThan('large')`
    padding: 0 0 3rem;
  `}
`;
