import React from 'react';

import { Container } from './Container';

export default {
  title: 'Container',
  component: Container,

  argTypes: {},
  decorators: [
    Story => (
      <div style={{ backgroundColor: 'black' }}>
        <Story />
      </div>
    )
  ]
};

const Template = args => <Container {...args} />;

export const Default = Template.bind({});
