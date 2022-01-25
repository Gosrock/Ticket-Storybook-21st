import React from 'react';

import { UtilityButton } from './UtilityButton.jsx';
import { ReactComponent as ShareAlt } from './ShareAlt.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UtilityButton',
  component: UtilityButton
};

const Template = args => <UtilityButton {...args} />;

export const 티켓공유 = Template.bind({});
export const 채널문의 = Template.bind({});

티켓공유.args = {
  label: '예매한 티켓 공유',
  backgroundColor: 'white',
  logo: 'share'
};

채널문의.args = {
  label: '고스락 채널 문의',
  backgroundColor: 'yellow',
  logo: 'kakaoTalk'
};
