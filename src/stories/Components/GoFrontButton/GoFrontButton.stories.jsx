import React from 'react';

import { GoFrontButton } from './GoFrontButton';

export default {
  title: 'Components/GoFrontButton',
  component: GoFrontButton,

  argTypes: {}
};

const Template = args => <GoFrontButton {...args} />;

export const Default = Template.bind({});

export const 카카오페이송금 = Template.bind({});
카카오페이송금.args = {
  label: '또는, 카카오페이로 송금하기',
  fontColor: 'gray',
  arrowColor: 'yellow',
  arrowCircleBackground: false
};

export const 입금완료 = Template.bind({});
입금완료.args = {
  label: '입금 완료',
  fontColor: 'white',
  arrowColor: 'white',
  arrowCircleBackground: false
};

export const 휴대폰인증하러가기 = Template.bind({});
휴대폰인증하러가기.args = {
  label: '휴대폰 인증하러 가기',
  fontColor: 'white',
  arrowColor: 'white'
};
// GoFrontButton.propTypes = {
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
