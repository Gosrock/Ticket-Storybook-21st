import React from 'react';
import { TicketWrapContainer } from '../TicketWrapContainer/TicketWrapContainer';
import { TicketContainer } from './TicketContainer';
import { TicketTop } from '../TicketElement/TicketTop/TicketTop.jsx';
import { TicketBody } from '../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketBottom } from '../TicketElement/TicketBottom/TicketBottom.jsx';
import { InfoLayout } from '../TicketLayout/InfoLayout/InfoLayout.jsx';
import { ProgressLayout } from '../TicketLayout/ProgressLayout/ProgressLayout.jsx';
import { TicketLayout } from '../TicketLayout/TicketLayout/TicketLayout.jsx';

const TicketElement = {
  InfoLayout: (
    <InfoLayout>
      <TicketBody style={{ backgroundColor: 'white' }}>바디영역</TicketBody>
      <TicketBodyHeader style={{ backgroundColor: 'blue' }}>
        헤더 영역
      </TicketBodyHeader>
    </InfoLayout>
  ),
  ProgressLayout: (
    <ProgressLayout>
      <TicketBody style={{ backgroundColor: 'white' }}>바디영역</TicketBody>
      <TicketBodyHeader style={{ backgroundColor: 'blue' }}>
        헤더 영역
      </TicketBodyHeader>
      <TicketBottom style={{ backgroundColor: 'green' }}>바텀영역</TicketBottom>
    </ProgressLayout>
  ),
  TicketLayout: (
    <TicketLayout>
      <TicketBody style={{ backgroundColor: 'white' }}>바디영역</TicketBody>
    </TicketLayout>
  )
};
export default {
  title: 'Layout/TicketContainer',
  component: TicketContainer,
  argTypes: {
    TopElement: {
      control: false
    },
    children: {
      options: Object.keys(TicketElement),
      mapping: TicketElement,
      control: {
        type: 'select',
        labels: {
          InfoLayout: 'InfoLayout',
          ProgressLayout: 'ProgressLayout',
          TicketLayout: 'TicketLayout'
        }
      }
    }
  }
};

const Template = args => {
  return (
    <TicketWrapContainer>
      <TicketContainer {...args} />
    </TicketWrapContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  TopElement: (
    <TicketTop style={{ height: '100%', backgroundColor: 'red' }}>
      asdf
    </TicketTop>
  )
};
