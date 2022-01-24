import React from 'react';
import PropTypes from 'prop-types';
import './TicketBottom.css';

/**
 * 레이아웃 엘리먼트중에 다음으로 버튼 등 아래 영역에 해당하는 컴포넌트입니다.
 */
export const TicketBottom = ({ children, ...props }) => {
  return (
    <div className="TicketBottom" {...props}>
      {children}
    </div>
  );
};

TicketBottom.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
