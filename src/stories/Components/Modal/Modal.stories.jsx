import React from 'react';

import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,

  argTypes: {}
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
