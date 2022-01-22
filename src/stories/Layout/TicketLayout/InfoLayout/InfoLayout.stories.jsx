import React from 'react';
import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';
import { InfoLayout } from './InfoLayout.jsx';

export default {
  title: 'Layout/InfoLayout',
  component: InfoLayout,
  argTypes: {}
};

const Template = args => {
  return (
    <InfoLayout>
      <TicketBody>바디영역</TicketBody>
      <TicketBodyHeader>헤더 영역</TicketBodyHeader>
    </InfoLayout>
  );
};

export const Default = Template.bind({});
