import React from 'react';

import { InputForm } from './InputForm';

export default {
  title: 'Components/InputForm',
  component: InputForm,

  argTypes: {}
};

const Template = args => <InputForm {...args} />;

export const Default = Template.bind({});

export const 휴대폰번호 = Template.bind({});
휴대폰번호.args = {
  type: 'number',
  placeholder: '휴대폰 번호 입력'
};

export const 인증번호 = Template.bind({});
인증번호.args = {
  type: 'number',
  placeholder: '인증번호 입력',
  isValidate: true
};

export const 티켓매수 = Template.bind({});
티켓매수.args = {
  type: 'number',
  placeholder: '1',
  isTicketing: true
};

export const 입금자명 = Template.bind({});
입금자명.args = {
  type: 'string',
  placeholder: '입금자명',
  isTicketing: true
};
