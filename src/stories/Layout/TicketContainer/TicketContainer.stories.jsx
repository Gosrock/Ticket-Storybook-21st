import React from 'react';
import { TicketWrapContainer } from '../TicketWrapContainer/TicketWrapContainer';
import { TicketContainer } from './TicketContainer';
import { TicketBody } from '../TicketBody/TicketBody';
import { TicketBodyHeader } from '../TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketTop } from '../TicketTop/TicketTop';
import { TicketBottom } from '../TicketBottom/TicketBottom';

const TicketElement = {
  TicketTop: (
    <TicketTop>
      <div style={{ display: 'inline' }}>TicketTop</div>
    </TicketTop>
  ),
  TicketBodyHeader: (
    <TicketBodyHeader>TicketBodyHeader 비율을 2로</TicketBodyHeader>
  ),
  TicketBody: (
    <TicketBody>
      <div style={{ width: '100%', height: '100%' }}>TicketBody 비율을 2로</div>
    </TicketBody>
  ),
  TicketBottom: <TicketBottom>TicketBottom 비율을 2로</TicketBottom>
};
export default {
  title: 'Layout/TicketContainer',
  component: TicketContainer,
  argTypes: {
    children: {
      options: Object.keys(TicketElement),
      mapping: TicketElement,
      control: {
        type: 'check',
        labels: {
          TicketTop: 'TicketTop',
          TicketBodyHeader: 'TicketBodyHeader',
          TicketBody: 'TicketBody',
          TicketBottom: 'TicketBottom'
        }
      }
    }
  }
};

const Template = args => {
  if (Array.isArray(args.children)) {
    args = {
      ...args,
      children: args.children.map(label => TicketElement[label])
    };
  }
  return (
    <TicketWrapContainer>
      <TicketContainer {...args} />
    </TicketWrapContainer>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   children: <TicketBody></TicketBody>
// };
// export const 카카오페이송금 = Template.bind({});
// 카카오페이송금.args = {
//   label: '또는, 카카오페이로 송금하기',
//   fontColor: 'gray',
//   arrowColor: 'yellow',
//   arrowCircleBackground: false
// };

export const 티켓화면 = Template.bind({});
티켓화면.args = {
  children: ['TicketTop', 'TicketBottom', 'TicketBody']
};

// export const 휴대폰인증하러가기 = Template.bind({});
// 휴대폰인증하러가기.args = {
//   label: '휴대폰 인증하러 가기',
//   fontColor: 'white',
//   arrowColor: 'white'
// };
// TicketContainer.propTypes = {
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
//   /**
//    * 폰트의 컬러를 변경할수 있습니다. 기본은 white 입니다,
//    */
//   fontColor: PropTypes.oneOf(['white', 'gray']),
//   /**
//    * 화살표의 색을 변경할수 있습니다. 기본은 white 입니다,
//    */
//   arrowColor: PropTypes.oneOf(['white', 'yellow']),
//   /**
//    * 화살표 배경에 원을 지정할 수 있습니다. 기본은 true 입니다,
//    */
//   arrowCircleBackground: PropTypes.bool
// };