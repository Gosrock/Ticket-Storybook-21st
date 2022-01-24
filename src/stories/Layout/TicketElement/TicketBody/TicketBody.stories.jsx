import React from 'react';
import { TicketBody } from './TicketBody.jsx';
// import { TicketBodyHeader } from '../TicketBodyHeader/TicketBodyHeader.jsx';
// import { TicketBottom } from '../TicketBottom/TicketBottom.jsx';
// import { ProgressLayout } from './ProgressLayout.jsx';

export default {
  title: 'Layout/Element/TicketBody',
  component: TicketBody,
  argTypes: {}
};

const Template = args => {
  return <TicketBody></TicketBody>;
};

export const Default = Template.bind({});
