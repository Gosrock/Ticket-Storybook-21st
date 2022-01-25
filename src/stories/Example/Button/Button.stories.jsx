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

export const 화가난주안 = Template.bind({});
화가난주안.args = {
  label: '주안이 존나 화남'
};

export const 기여미주안 = Template.bind({});
기여미주안.args = {
  label: '주아니기여워버튼'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '버튼'
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
