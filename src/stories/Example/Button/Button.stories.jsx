import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: false }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args} />;

export const 예재 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const 한규진바보버튼 = Template.bind({});
한규진바보버튼.args = {
  label: '한규진바보버튼'
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: '버튼'
// };

// export const SmallTest = Template.bind({});
// SmallTest.args = {
//   size: 'small',
//   label: '버튼'
// };

export const 이찬진천재 = Template.bind({});
이찬진천재.args = {
  label: '이찬진천재'
};
