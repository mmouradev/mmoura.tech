import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  background: #2c2c2c;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  text-align: center;
  width: 15rem;
  padding: 2rem;
  transition: all 0.5s ease 0s;

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    width: 100%;
    padding: 1rem 2rem;
    z-index: 9999;
  `}
`;
