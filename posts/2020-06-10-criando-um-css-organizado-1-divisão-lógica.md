---
title: 'Criando um CSS organizado #1 [Agrupamento lógico]'
description: >-
  Aprenda a criar uma divisão lógica para atributos no CSS, dividindo em seções
  para facilitar o entendimento do código.
date: '2020-06-10 10:27:46'
category: CSS
background: '#24809e'
---
Opa, tudo certo por ai? Então, resolvi fazer esse post como o início de uma serie de dicas voltadas ao CSS e a melhor forma de começar isso é pela organização do código. Nesse post vou falar sobre como usar um agrupamento lógico para separar seus propriedades CSS em blocos e nunca mais se perder dentro de um seletor, vou mostrar isso com um exemplo bem simples:

```css
.foo {
  display:flex;
  width: 200px;
  background-image: url('../assets/bg.png');
  font-size: 20px;
  border: 1px solid #000;
  margin: 20px 10px;
  flex-direction: column;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  font-weight: bold;
  background-position: center center;
  padding: 8px;
  border-radius: 3px;
}
```

Aqui temos um seletor CSS beeeeem longo e bem confuso, não acha?! Pois bem, porque digo que ela é confusa? Pelo simples fato de que a cada linha ela está tralhando com uma propriedade distinta, percebe o como é mais difícil entender que o width e o height estão definidos quando estão em linhas tão separadas e pode parecer um absurdo, mas seletores escritos dessa maneira acontecem com bastante frequência, geralmente começamos a estrutura bem organizada, mas encontramos um novo bug e inserimos a correção ao final do seletor sem se preocupar com a estética dele e isso pode matar a manutenibilidade do CSS.

### Não existe forma correta de fazer esse agrupamento

Você pode agrupar da maneira que mais gostar, mas eu fortemente recomendo a seguinte forma que vou indicar:

#### Agrupamento lógico

Este é o método que considero mais produtivo, mas também que mais precisa de documentação e treino, para que não aconteçam divergências no decorrer do projeto. É importante garantir que todas as propriedades foram mapeadas para evitar propriedades "esquecidas" em meio ao código.

Um exemplo de agrupamento lógico:

```css
.seletor {
    [posicionamento]
    [tamanho]
    [bordas]
    [espaçamentos]
    [plano de fundo]
    [fonte e propriedades de texto]
}
```

Como eu disse anteriormente não existe uma regra que dita esse agrupamento, está é apenas a forma que eu utilizo para faze-lo. E a lógica por trás dela é dá estilização de fora do elemento para dentro, começando com o posicionamento e terminando com backgrounds e estilos de texto.

Nosso exemplo de seletor agora agrupado:

```css
.foo {
  display:flex;
  flex-direction: column;
  justify-content: center;
  
  width: 200px;
  height: 100%;
  
  border-radius: 3px;
  border: 1px solid #000;
  
  margin: 20px 10px;
  padding: 8px;
  
  background-image: url('../assets/bg.png');
  background-position: center center;
  
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
}
```

Desta forma os seletores ficam bem mais legíveis e fáceis de dar manutenção, não é mesmo?

Com técnicas simples como esta é possível tornar o CSS mais funcional, semântico e compreensível, mantendo, principalmente, a flexibilidade do código.
