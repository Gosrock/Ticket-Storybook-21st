import React from 'react';

import { Ticket } from './Ticket.jsx';

export default {
  title: 'Components/Ticket',
  component: Ticket
};

const Template = args => <Ticket {...args} />;

export const 입금확인전티켓 = Template.bind({});
export const 입금확인후티켓 = Template.bind({});

입금확인전티켓.args = {
  date: '22.03.10',
  place: 'CLUB 001',
  payment: false,
  QRvalue: 'https://github.com/Gosrock'
};

입금확인후티켓.args = {
  date: '22.03.10',
  place: 'CLUB 001',
  payment: true,
  QRvalue: 'https://github.com/Gosrock'
};
