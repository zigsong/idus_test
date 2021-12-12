import { createGlobalStyle } from 'styled-components';

import PALETTE from 'constants/palette';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${PALETTE.BLACK.TEXT_400};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
