import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import mockCards from 'components/CardPane/mock';
import CardDetail from './index';

export default {
  title: 'CardDetail',
  component: CardDetail.Vertical,
} as ComponentMeta<typeof CardDetail.Vertical>;

export const Vertical: ComponentStory<typeof CardDetail.Vertical> = () => (
  <CardDetail.Vertical {...mockCards[0]} />
);

// TODO: viewport 모바일로 설정하기
export const Horizontal: ComponentStory<typeof CardDetail.Horizontal> = () => (
  <CardDetail.Horizontal {...mockCards[3]} />
);
