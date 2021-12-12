import React from 'react';

import CardPane from 'components/CardPane';
import mockCards from 'components/CardPane/mock';
import GlobalStyle from 'GlobalStyle';
import Styled from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Styled.CardsContainer>
        {mockCards.map((card) => (
          <li key={card.id}>
            <CardPane {...card} />
          </li>
        ))}
      </Styled.CardsContainer>
    </>
  );
};

export default App;
