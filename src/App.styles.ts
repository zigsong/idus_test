import styled from 'styled-components';

import { MEDIA_QUERY } from 'constants/mediaQuery';

const Root = styled.div`
  max-width: 1080px;
  margin: auto;
`;

const CardsContainer = styled.ul`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(240px, auto));
  grid-gap: 1rem;

  @media ${MEDIA_QUERY.MOBILE} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormsContainer = styled.div`
  & > * {
    margin: 1rem;
  }
`;

export default { Root, CardsContainer, FormsContainer };
