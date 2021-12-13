import React from 'react';

import { CardType } from 'types';
import Styled from './styles';

const SCORE_MAX = 5;

const Vertical = ({ label, title, price, isHighlighted, stars, review }: CardType) => {
  return (
    <Styled.Root className="vertical">
      <Styled.Container>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Title>{title}</Styled.Title>
        <Styled.PriceWrapper>
          <Styled.Highlight>{isHighlighted && 'Highlight'}</Styled.Highlight>
          <Styled.Price>{price}</Styled.Price>
        </Styled.PriceWrapper>
      </Styled.Container>
      {stars || review ? (
        <>
          <Styled.Divider />
          <Styled.Container>
            {stars ? (
              <Styled.StarsContainer score={stars}>
                {Array.from({ length: SCORE_MAX }, (_, idx) => (
                  <Styled.Star key={idx} />
                ))}
              </Styled.StarsContainer>
            ) : null}
            {review ? <Styled.Review>{review}</Styled.Review> : null}
          </Styled.Container>
        </>
      ) : null}
    </Styled.Root>
  );
};

const Horizontal = ({ title, stars, artist, review }: CardType) => {
  return (
    <Styled.Root className="horizontal">
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Review>{review}</Styled.Review>
        <Styled.BottomWrapper>
          {stars && (
            <Styled.StarsContainer score={stars}>
              {Array.from({ length: SCORE_MAX }, (_, idx) => (
                <Styled.Star key={idx} />
              ))}
            </Styled.StarsContainer>
          )}
          <Styled.Artist hasDivider={!!stars}>{artist}</Styled.Artist>
        </Styled.BottomWrapper>
      </Styled.Container>
    </Styled.Root>
  );
};

const CardDetail = {
  Vertical,
  Horizontal,
};

export default CardDetail;
