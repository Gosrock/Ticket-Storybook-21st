import React from 'react';

import { InputForm } from './InputForm';

export default {
  title: 'Components/InputForm',
  component: InputForm,

  argTypes: {}
};

const Template = args => <InputForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: 'default'
};

export const 휴대폰번호 = Template.bind({});
휴대폰번호.args = {
  page: 'phone'
};

export const 인증번호 = Template.bind({});
인증번호.args = {
  page: 'validate'
};

export const 티켓매수 = Template.bind({});
티켓매수.args = {
  page: 'count'
};

export const 입금자명 = Template.bind({});
입금자명.args = {
  page: 'name'
};

export const 학번 = Template.bind({});
학번.args = {
  page: 'studentId'
};
