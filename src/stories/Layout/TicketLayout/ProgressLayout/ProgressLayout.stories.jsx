import React from 'react';
import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketBottom } from '../../TicketElement/TicketBottom/TicketBottom.jsx';
import { ProgressLayout } from './ProgressLayout.jsx';

export default {
  title: 'Layout/Layout/ProgressLayout',
  component: ProgressLayout,
  argTypes: {}
};

const Template = args => {
  return (
    <ProgressLayout>
      <TicketBody>바디영역</TicketBody>
      <TicketBodyHeader>헤더 영역</TicketBodyHeader>
      <TicketBottom>바텀영역</TicketBottom>
    </ProgressLayout>
  );
};

export const Default = Template.bind({});
export const ProgressStoryBookLayout = Template.bind({});
