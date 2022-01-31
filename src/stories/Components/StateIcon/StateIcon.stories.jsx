import React from 'react';

import { StateIcon } from './StateIcon';

export default {
  title: 'Components/StateIcon',
  component: StateIcon
};

const Template = args => <StateIcon {...args} />;

export const 입금확인중 = Template.bind({});
export const 입금확인 = Template.bind({});
export const 미입금처리 = Template.bind({});
export const 입장완료 = Template.bind({});

입금확인중.args = {
  label: '입금 확인중',
  background: 'blue',
  word: 'five'
};

입금확인.args = {
  label: '입금 확인',
  background: 'green',
  word: 'four'
};

미입금처리.args = {
  label: '미입금 처리',
  background: 'red',
  word: 'five'
};
입장완료.args = {
  label: '입장 완료',
  background: 'yellow',
  word: 'four'
};
