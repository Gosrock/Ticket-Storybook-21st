import React from 'react';
import { TicketBodyHeader } from './TicketBodyHeader.jsx';

export default {
  title: 'Layout/Element/TicketBodyHeader',
  component: TicketBodyHeader,
  argTypes: {}
};

const Template = args => {
  return <TicketBodyHeader></TicketBodyHeader>;
};

export const Default = Template.bind({});
