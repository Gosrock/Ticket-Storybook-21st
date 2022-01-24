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
  subcomponents: {
    TicketWrapContainer,
    InfoLayout,
    ProgressLayout,
    TicketLayout
  },
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

export const InfoLayout_제목_컨텐츠 = Template.bind({});
InfoLayout_제목_컨텐츠.args = {
  TopElement: (
    <TicketTop style={{ height: '100%', backgroundColor: 'red' }}>
      asdf
    </TicketTop>
  ),

  children: TicketElement['InfoLayout']
};

export const ProgressLayout_제목_컨텐츠_다음버튼 = Template.bind({});
ProgressLayout_제목_컨텐츠_다음버튼.args = {
  TopElement: (
    <TicketTop style={{ height: '100%', backgroundColor: 'red' }}>
      asdf
    </TicketTop>
  ),

  children: TicketElement['ProgressLayout']
};

export const TicketLayout_컨텐츠_티켓 = Template.bind({});
TicketLayout_컨텐츠_티켓.args = {
  TopElement: (
    <TicketTop style={{ height: '100%', backgroundColor: 'red' }}>
      asdf
    </TicketTop>
  ),

  children: TicketElement['TicketLayout']
};
