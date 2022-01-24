import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: ['asdfasdf'],
  label: '이찬진',
  size: 'asdf'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '버튼'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: '버튼'
};

export const SmallTest = Template.bind({});
SmallTest.args = {
  size: 'small',
  label: '버튼'
};
