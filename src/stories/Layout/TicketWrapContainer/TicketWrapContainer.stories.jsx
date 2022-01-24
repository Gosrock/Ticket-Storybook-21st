import React from 'react';
import { TicketContainer } from '../TicketContainer/TicketContainer.jsx';
import { TicketWrapContainer } from './TicketWrapContainer';

export default {
  title: 'Layout/TicketWrapContainer',
  component: TicketWrapContainer,
  argTypes: {}
};

const Template = args => {
  return (
    <TicketWrapContainer>
      <TicketContainer></TicketContainer>
    </TicketWrapContainer>
  );
};

export const Default = Template.bind({});
