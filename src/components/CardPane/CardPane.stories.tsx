import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import CardPane from './index';
import mockCards from './mock';

export default {
  title: 'CardPane',
  component: CardPane,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof CardPane>;

export const Default: ComponentStory<typeof CardPane> = () => <CardPane {...mockCards[0]} />;

export const Mobile: ComponentStory<typeof CardPane> = () => <CardPane {...mockCards[0]} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
