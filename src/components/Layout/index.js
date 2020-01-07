import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyles from '../../styles/global';
import * as S from './styled';

import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutWrapper>
        <GlobalStyles />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
