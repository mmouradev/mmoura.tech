import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

import Avatar from '../Avatar';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query mySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink cover direction="left" bg="#232323" duration={0.6} to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
};

export default Profile;
