import React from 'react';
import PropTypes from 'prop-types';
import './TicketTop.css';

/**
 * 레이아웃 엘리먼트중에 뒤로가기 버튼 등 맨 윗 영역에 해당하는 컴포넌트입니다.
 */
export const TicketTop = ({ children, ...props }) => {
  return (
    <div className="TicketTop" {...props}>
      {children}
    </div>
  );
};

TicketTop.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
