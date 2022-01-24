import React from 'react';
import PropTypes from 'prop-types';
import './TicketLayout.css';
import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';

/**
 * 티켓 정보 출력을 위해 내용을 필요로하는 레이아웃 입니다.
 * https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=343%3A13330
 * 자식 컴포넌트로 TicketBody 를 필요로 합니다.
 */
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
   * TicketBody 컴포넌트 하나만을 자식 컴포넌트로 필요로 합니다.
   */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([TicketBody])
    })
  ]).isRequired
};
