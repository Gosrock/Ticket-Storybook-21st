import React from 'react';

import { ProcessTitle } from './ProcessTitle.jsx';

export default {
  title: 'Components/ProcessTitle',
  component: ProcessTitle,

  argTypes: {},
  decorators: [
    Story => (
      <div style={{ width: '600px', backgroundColor: 'red' }}>
        <Story />
      </div>
    )
  ]
};

const Template = args => <ProcessTitle {...args} />;

export const Default = Template.bind({});

export const 티켓처음이신가요 = Template.bind({});
티켓처음이신가요.args = {
  topLabel: '티켓 예매가',
  bottomLabel: '처음이신가요?',
  textAlign: 'right',
  textSize: 'big'
};
