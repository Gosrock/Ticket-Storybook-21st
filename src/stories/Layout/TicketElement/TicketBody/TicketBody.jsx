import React from 'react';
import PropTypes from 'prop-types';
import './TicketBody.css';

/**
 * 레이아웃 엘리먼트중에 바디 영역에 해당하는 컴포넌트입니다.
 */
export const TicketBody = ({ children, ...props }) => {
  return (
    <div className="TicketBody" {...props}>
      {children}
    </div>
  );
};

TicketBody.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
