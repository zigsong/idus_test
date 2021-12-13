import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from './index';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Placeholder: ComponentStory<typeof Form> = () => <Form hasButton />;

export const Active: ComponentStory<typeof Form> = () => (
  <Form defaultValue="입력중.. 또는 내용 변경시" hasButton />
);

export const Disabled: ComponentStory<typeof Form> = () => (
  <Form defaultValue="주문 요청사항을 입력해주세요" hasButton={false} disabled />
);
export const ReadOnly: ComponentStory<typeof Form> = () => (
  <Form defaultValue="읽기 전용입니다" hasButton={false} readOnly />
);
