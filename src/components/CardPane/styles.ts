import styled from 'styled-components';

import defaultImg from 'assets/images/idus_large.webp';
import PALETTE from 'constants/palette';
import { MEDIA_QUERY } from 'constants/mediaQuery';

const Root = styled.div`
  max-width: 250px;
  margin: auto;
  user-select: none;

  @media ${MEDIA_QUERY.MOBILE} {
    max-width: 340px;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${PALETTE.GRAY.BORDER_400};
  border-radius: 4px;

  & > a {
    width: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  @media ${MEDIA_QUERY.MOBILE} {
    min-height: 128px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${MEDIA_QUERY.MOBILE} {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div<{ bgSrc: string }>`
  position: relative;
  overflow: hidden;

  & .product-image {
    background-image: ${({ bgSrc }) => `url(${bgSrc}), url(${defaultImg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: auto;
    display: block;
    position: relative;

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  @media ${MEDIA_QUERY.MOBILE} {
    flex: 0 0 128px;
  }
`;

export default { Root, Container, CardWrapper, ImageWrapper };
