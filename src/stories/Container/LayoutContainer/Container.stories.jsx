import React from 'react';
import { Container } from './Container';
import { TypeOne } from '../Type1/TypeOne';
import { TypeTwo } from '../Type2/TypeTwo';
import { TypeThree } from '../Type3/TypeThree';

const LayoutType = {
  typeOne: <TypeOne />,
  typeTwo: <TypeTwo />,
  TypeThree: <TypeThree />
};

export default {
  title: 'Container/Container',
  component: Container,

  argTypes: {
    children: {
      options: Object.keys(LayoutType),
      mapping: LayoutType,
      control: {
        type: 'check',
        labels: {
          typeOne: 'typeOne',
          typeTwo: 'typeTwo',
          typeThree: 'typeThree'
        }
      }
    }
  },

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
