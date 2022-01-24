import React from 'react';
import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketLayout } from './TicketLayout.jsx';

export default {
  title: 'Layout/Layout/TicketLayout',
  component: TicketLayout,
  argTypes: {}
};

const Template = args => {
  return (
    <TicketLayout>
      <TicketBody>바디영역</TicketBody>
    </TicketLayout>
  );
};

export const Default = Template.bind({});
