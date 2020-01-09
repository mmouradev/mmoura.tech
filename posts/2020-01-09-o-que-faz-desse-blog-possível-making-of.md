---
title: O que faz desse blog possível - Making of
description: >-
  Aqui listarei e falarei sobre as ferramentas e inspirações utilizadas para o
  desenvolvimento desse blog
date: '2020-01-08 08:07:56'
category: DEV
background: '#33b899'
---
Acho valido começar a primeira postagem do nosso blog (pois foi feito para você) com uma breve introdução das ideia que me levaram a desenvolver ele.

## A ideia

Na verdade todo o processo de planejamento e execução do Blog foi bem rápida, era algo que já queria fazer a um bom tempo pois sempre gostei bastante de ler todo tipo de conteúdo em Blogs, seja em plataformas próprias ou mesmo no Medium e outras plataformas. Basicamente levei cerca de 3 dias estruturando todo ele e minha principal ideia é transmitir um pouco de conhecimento, divertir em certos momentos e até mesmo mostrar um pouco da minha vida, nem tão incrível por sinal.

## O processo

Eu comecei todo o processo de desenvolvimento e estruturação de ideias buscando inspirações, lendo outros Blogs sobre o assunto e buscando referencias tanto visuais quanto técnica, até que encontrei o blog do [Willian Justen](https://willianjusten.com.br/) e me apaixonei pelo conteúdo, qualidade visual e tudo, além disso, ele possuí uma postagem explicando como funciona o blog dele, esse post está sendo inspirado no dele, então dei uma lida e resolvi quais tecnologias usaria para criar o blog. Então esse maravilhoso blog começou a sair do papel e foi direto para uma IDE.

## Tecnologias usadas

* [Gatsby](https://www.gatsbyjs.org/) - base de todo o blog, gerador de páginas estáticas.
* [Styled Components](https://www.styled-components.com/) - sem comentários né?! Quase impossível usar React e não usar styled-components.
* [Markdown](https://daringfireball.net/projects/markdown/) - basicamente oque está lendo agora é escrito em MD e convertido para HTML.
* [GraphQL](https://graphql.org/) - "A query language for your API" from Facebook... rsrs brincadeiras a parte, uma poderosa ferramenta que me permite junto ao Markdown e Gatsby criar as postagens.
* [Disqus](https://disqus.com/) - third-party script para os comentários.
* [Netlify](https://www.netlify.com/) e de bônus [Netlify CMS](https://www.netlifycms.org/) - pouco esforço, muito proveito.

## Um pouco mais sobre cada tecnologia

### Gatsby

Essa é minha primeira experiência com Gatsby e apesar disso gostei muito de trabalhar com essa tecnologia, é maravilhoso todo o workflow. Basicamente utiliza React e GraphQL para fazer toda a mágia de gerar páginas estáticas! Os seus vários plugins facilitam e muito todo o processo de desenvolvimento, além de todo o site ser extremamente performático! Documentação incrível e vários outros elogios que poderia fazer aqui, mas vale a pena você mesmo olhar tudo isso, lá em cima de link em :)

### Styled Components

Esse vai ser rápido pois se não conhece ainda deveria ir agora conhecer rsrs... Essa maravilha permite o uso das melhores coisas do ES6 e CSS para estilização sem stress. Como o Gatsby usa React e eu já usava Styled Components com ele não tive dúvidas sobre utiliza-lo aqui também.

Todos os componentes criados com React faço também um arquivo na mesma pasta chamado **styled.js** que basicamente segura todo o estilo do componentes, aqui vai um exemplo do código:

```js
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
`;import styled from 'styled-components';
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
```

### Markdown + GraphQL = Remark

Pra quem não conhece o Markdown é um formato de texto extremamente simples que se converte em HTML a grande facilidade disso é não ter que escrever as inumeras tags, facilitando e muito todo o processo de escrita.

Mas como fazer isso funcionar com o Gatsby? Na verdade a resposta foi fácil, como disse anteriormente eu me inspirei fortemente no Willian e no post de [Making of](https://willianjusten.com.br/making-of-blog-novo/) ele apresenta o plugin [Gatsby Transformer Remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) e foi esse mesmo que utilizei para pegar meu Markdown, que estou escrevendo agora, e usar no blog.

### Netlify e Netlify CMS

O uso do Netlify é simples, essa poderosa ferramenta me possibilita várias vantagens tais como ter o preview/deploy de cada branch realizada.

Apesar de conseguir ler e escrever Markdowns puros sem ajuda de nenhum CMS resolvi utilizar para facilitar o processo geral de criação e edição, afinal o Netlify CMS disponibiliza uma ferramenta maravilhosa de revisão, edição e criação de todo conteúdo das postagens.

### Conclusão

Espero que tenha gostado desse conteúdo e que tenha sido útil de alguma forma para você. Também gostaria muito de te ver aqui novamente em algum post futuro, afinal minha ideia é sempre alimentar esse blog com uma variedade de conteúdos sobre diversos assuntos que acho interessantes de serem falados. 




 
