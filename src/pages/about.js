import React from 'react';

import * as S from '../components/About/styled';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <S.AboutWrapper>
      <S.AboutTitle>Sobre mim</S.AboutTitle>
      <S.AboutParagraph>
        Me chamo Matheus Souza Moura, nasci em Jataí/GO, atuo como desenvolvedor
        Front-end na Set Rastreador, amante de jogos e em certos tempos aspirante a jogador profissional.
      </S.AboutParagraph>
      <S.AboutParagraph>
        Todo meu conhecimento foi adquirido com autodidatismo, assim busco
        trazer alguns conteúdos sobre isso por aqui, estudo desenvolvimento web
        desde meados de 2015 e por paixão escolhi essa profissão.
      </S.AboutParagraph>
      <S.AboutParagraph>
        Amo trabalhar em equipe, apesar de não ter muitas oportunidades para
        isso. E no tempo livre procuro ensinar e escrever sobre algo nesse blog.
      </S.AboutParagraph>

      <S.AboutSubtitle>Habilidades</S.AboutSubtitle>
      <S.AboutHabilityList>
        <S.HabilityListItem>HTML e Template Languages</S.HabilityListItem>
        <S.HabilityListItem>CSS (Sass)</S.HabilityListItem>
        <S.HabilityListItem>
          CSS Framework (Bootstrap, Tailwind)
        </S.HabilityListItem>
        <S.HabilityListItem>Javascript ( ES6/7)</S.HabilityListItem>
        <S.HabilityListItem>Typescript</S.HabilityListItem>
        <S.HabilityListItem>ReactJS</S.HabilityListItem>
        <S.HabilityListItem>AngularJS/Angular2+</S.HabilityListItem>
        <S.HabilityListItem>Java</S.HabilityListItem>
        <S.HabilityListItem>
          Automatizadores (Grunt, Gulp, Webpack)
        </S.HabilityListItem>
        <S.HabilityListItem>Git</S.HabilityListItem>
        <S.HabilityListItem>Continuos Integration</S.HabilityListItem>
        <S.HabilityListItem>
          Já o que não sei, busco aprender rápido
        </S.HabilityListItem>
      </S.AboutHabilityList>

      <S.AboutSubtitle>Entre em contato</S.AboutSubtitle>
      <S.AboutParagraph>
        Você pode entrar em contato por qualquer rede social ou e-mail abaixo
      </S.AboutParagraph>
      <SocialLinks></SocialLinks>
    </S.AboutWrapper>
  </Layout>
);

export default AboutPage;
