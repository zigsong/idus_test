import React from 'react';

import CardDetail from 'components/CardDetail';
import { CardType } from 'types';
import Styled from './styles';

const CardPane = (card: CardType) => {
  return (
    <Styled.Root>
      <Styled.Container>
        <a href={card.link}>
          <Styled.CardWrapper>
            <Styled.ImageWrapper bgSrc={card.imageUrl}>
              <div className="product-image" />
            </Styled.ImageWrapper>
            <CardDetail.Vertical {...card} />
            <CardDetail.Horizontal {...card} />
          </Styled.CardWrapper>
        </a>
      </Styled.Container>
    </Styled.Root>
  );
};

export default CardPane;
