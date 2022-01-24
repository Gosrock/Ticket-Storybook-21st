import React from 'react';

import { JaetakButton } from './jaetakButton.jsx';

export default {
  title: 'jaetakButton',
  component: JaetakButton
};
const Template = args => <JaetakButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: ['asdfasdf'],
  label: '안녕하세요',
  size: 'asdf'
};
