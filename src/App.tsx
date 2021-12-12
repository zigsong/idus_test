import React from 'react';

import CardPane from 'components/CardPane';
import mockCards from 'components/CardPane/mock';
import GlobalStyle from 'GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ul>
        {mockCards.map((card) => (
          <CardPane key={card.id} {...card} />
        ))}
      </ul>
    </>
  );
};

export default App;
