import React from 'react';

import { TicketList } from './TicketList';

export default {
  title: 'Components/TicketList',
  component: TicketList
};

const Template = args => <TicketList {...args} />;

export const 예매티켓 = Template.bind({});

예매티켓.args = {
  date1: '관람일시',
  date2: '예매일시',
  performdate: '22.03.03',
  bookdate: '22.02.14'
};
