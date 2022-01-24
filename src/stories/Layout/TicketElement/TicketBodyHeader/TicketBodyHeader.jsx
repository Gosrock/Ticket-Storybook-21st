import React from 'react';
import PropTypes from 'prop-types';
import './TicketBodyHeader.css';

/**
 * 레이아웃 엘리먼트중에 제목 영역에 해당하는 컴포넌트입니다.
 */
export const TicketBodyHeader = ({ children, ...props }) => {
  return (
    <div className="TicketBodyHeader" {...props}>
      {children}
    </div>
  );
};

TicketBodyHeader.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
