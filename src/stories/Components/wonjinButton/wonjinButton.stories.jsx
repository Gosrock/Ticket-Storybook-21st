import React from 'react';

import { WonjinButton } from './wonjinButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/wonjinButton',
  component: WonjinButton
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <WonjinButton {...args} />;

export const 김원진웃음버튼 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
김원진웃음버튼.args = {
  label: '김원진웃음버튼',
  size: 'small'
};
