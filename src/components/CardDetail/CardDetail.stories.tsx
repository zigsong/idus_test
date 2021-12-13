import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import mockCards from 'components/CardPane/mock';
import CardDetail from './index';

export default {
  title: 'CardDetail',
  component: CardDetail.Vertical,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof CardDetail.Vertical>;

export const Vertical: ComponentStory<typeof CardDetail.Vertical> = () => (
  <CardDetail.Vertical {...mockCards[0]} />
);

export const Horizontal: ComponentStory<typeof CardDetail.Horizontal> = () => (
  <CardDetail.Horizontal {...mockCards[3]} />
);

Horizontal.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
