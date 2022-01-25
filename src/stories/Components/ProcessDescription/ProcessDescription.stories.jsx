import React from 'react';

import { ProcessDescription } from './ProcessDescription.jsx';

export default {
  title: 'Components/ProcessDescription',
  component: ProcessDescription,

  argTypes: {},
  decorators: [
    Story => (
      <div style={{ width: '600px', backgroundColor: 'black' }}>
        <Story />
      </div>
    )
  ]
};

const Template = args => <ProcessDescription {...args} />;

export const Default = Template.bind({});

export const 한줄일때 = Template.bind({});
한줄일때.args = {
  topLabel: '티켓 수량을 입력해 주세요.'
};

export const 두줄일때 = Template.bind({});
두줄일때.args = {
  topLabel: '문자에 답장을 하게되면',
  bottomLabel: '번호가 노출 되니 주의해주세요'
};
