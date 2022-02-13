import React from 'react';

import { Ticket } from './Ticket.jsx';
import { TicketLayout_컨텐츠_티켓 } from '../../Layout/TicketContainer/TicketContainer.stories';

export default {
  title: 'Components/Ticket',
  component: Ticket,
  argTypes: {}
};

const Template = args => (
  <div>
    <TicketLayout_컨텐츠_티켓>
      <Ticket {...args} />
    </TicketLayout_컨텐츠_티켓>
  </div>
);

export const 입금확인전티켓 = Template.bind({});
입금확인전티켓.args = {
  date: '22.03.10',
  place: '라디오 가가',
  payment: false,
  QRvalue: 'https://github.com/Gosrock'
};

export const 입금확인후티켓 = Template.bind({});
입금확인후티켓.args = {
  date: '22.03.10',
  place: '라디오 가가',
  payment: true,
  QRvalue: 'https://github.com/Gosrock'
};

export const 입장후티켓 = Template.bind({});
입장후티켓.args = {
  date: '22.03.10',
  place: '라디오 가가',
  payment: true,
  enter: true,
  QRvalue: 'https://github.com/Gosrock'
};
