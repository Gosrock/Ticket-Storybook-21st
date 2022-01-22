import React from 'react';
import PropTypes from 'prop-types';
import './TicketLayout.css';

import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';

export const TicketLayout = ({ children, ...props }) => {
  // 상단(뒤로가기버튼) + 티켓
  return (
    <div className="vertical-grid TicketLayout" {...props}>
      {children}
    </div>
  );
};

TicketLayout.propTypes = {
  /**
   * children components need
   */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([TicketBody])
    })
  ]).isRequired
};
