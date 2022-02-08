import React from 'react';

import { TicketList } from './TicketList';
import { StateIcon } from '../StateIcon/StateIcon.jsx';

const StateIcons = {
  입금확인중: <StateIcon background="blue" label="입금 확인중" word="five" />,
  입금확인: <StateIcon background="green" label="입금 확인" />,
  미입금처리: <StateIcon label="미입금 처리" word="five" />,
  입장완료: <StateIcon background="yellow" label="입장 완료" />
};

export default {
  title: 'Components/TicketList',
  component: TicketList,
  argTypes: {
    TopElement: {
      control: false
    },
    StateIcon: {
      options: Object.keys(StateIcons),
      mapping: StateIcons,
      control: {
        type: 'select',
        labels: {
          입금확인중: '입금확인중',
          입금확인: '입금확인',
          미입금처리: '미입금처리',
          입장완료: '입장완료'
        }
      }
    }
  }
};

const Template = args => (
  <div style={{ width: '400px' }}>
    <TicketList {...args} />
  </div>
);

export const 예매티켓 = Template.bind({});

예매티켓.args = {
  performdate: '22.03.10',
  bookdate: '22.02.14',
  StateIcon: <StateIcon />
};
