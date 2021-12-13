import styled from 'styled-components';

import PALETTE from 'constants/palette';
import { MEDIA_QUERY } from 'constants/mediaQuery';

const Root = styled.div`
  overflow: hidden;

  & * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.vertical {
    display: block;
  }

  &.horizontal {
    display: none;
  }

  @media ${MEDIA_QUERY.MOBILE} {
    &.vertical {
      display: none;
    }

    &.horizontal {
      display: block;
      flex: 1;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  background: ${PALETTE.GRAY.BG_400};
  border-radius: 4px;

  @media ${MEDIA_QUERY.MOBILE} {
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Label = styled.div`
  color: ${PALETTE.GRAY.TEXT_400};
  font-size: 0.85rem;
  margin-bottom: 4px;
`;

const Title = styled.div`
  margin-bottom: 2px;

  @media ${MEDIA_QUERY.MOBILE} {
    font-weight: 700;
    font-size: 14px;
  }
`;

const PriceWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

const Price = styled.div`
  color: ${PALETTE.GRAY.TEXT_400};
  font-size: 0.85rem;
  text-decoration: line-through;
`;

const Highlight = styled.div`
  color: ${PALETTE.RED.TEXT_400};
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${PALETTE.GRAY.BORDER_400};
`;

const Star = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${PALETTE.GRAY.CIRCLE_400};
  vertical-align: text-top;

  &:not(:last-child) {
    margin-right: 4px;
  }

  @media ${MEDIA_QUERY.MOBILE} {
    width: 16px;
    height: 16px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StarsContainer = styled.div<{ score: number }>`
  & ${Star}:nth-child(-n + ${({ score }) => score}) {
    background: ${PALETTE.YELLOW.STAR_400};
  }
`;

const Review = styled.div`
  color: ${PALETTE.GRAY.TEXT_300};
  margin-top: 6px;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media ${MEDIA_QUERY.MOBILE} {
    margin: 0;
    font-size: 14px;
  }
`;

const Artist = styled.div<{ hasDivider: boolean }>`
  color: ${PALETTE.GRAY.TEXT_300};
  font-size: 14px;
  margin-left: ${({ hasDivider }) => hasDivider && '8px'};

  &:before {
    content: '|';
    display: ${({ hasDivider }) => (hasDivider ? 'inline-block' : 'none')};
    margin-right: 4px;
  }
`;

export default {
  Root,
  Container,
  Label,
  Title,
  PriceWrapper,
  Price,
  Highlight,
  Divider,
  BottomWrapper,
  StarsContainer,
  Star,
  Review,
  Artist,
};
