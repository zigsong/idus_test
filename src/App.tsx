import React from 'react';

import CardPane from 'components/CardPane';
import mockCards from 'components/CardPane/mock';
import Form from 'components/Form';
import GlobalStyle from 'GlobalStyle';
import Styled from './App.styles';

const App = () => {
  return (
    <Styled.Root>
      <GlobalStyle />
      <Styled.CardsContainer>
        {mockCards.map((card) => (
          <li key={card.id}>
            <CardPane {...card} />
          </li>
        ))}
      </Styled.CardsContainer>
      <Styled.FormsContainer>
        <Form defaultValue="초기값이 있을수 있습니다" hasButton={false} readOnly />
        <Form defaultValue="입력중.. 또는 내용 변경시" hasButton />
        <Form defaultValue="주문 요청사항을 입력해주세요" hasButton={false} disabled />
      </Styled.FormsContainer>
    </Styled.Root>
  );
};

export default App;
