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

/* export const 휴대폰번호 = Template.bind({});
휴대폰번호.args = {
  type: 'number',
  placeholder: '휴대폰 번호 입력',
  limit: 11
};

export const 인증번호 = Template.bind({});
인증번호.args = {
  type: 'number',
  placeholder: '인증번호 입력',
  isValidate: true,
  limit: 6
};

export const 티켓매수 = Template.bind({});
티켓매수.args = {
  type: 'number',
  placeholder: '1',
  isTicketing: true,
  limit: 1
};

export const 입금자명 = Template.bind({});
입금자명.args = {
  type: 'string',
  placeholder: '입금자명',
  isTicketing: true,
  limit: 4
};
 */

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
