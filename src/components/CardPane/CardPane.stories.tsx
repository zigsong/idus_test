import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardPane from './index';
import mockCards from './mock';

export default {
  title: 'CardPane',
  component: CardPane,
} as ComponentMeta<typeof CardPane>;

export const Default: ComponentStory<typeof CardPane> = () => <CardPane {...mockCards[0]} />;
