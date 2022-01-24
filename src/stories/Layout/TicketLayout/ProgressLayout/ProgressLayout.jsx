import React from 'react';
import PropTypes from 'prop-types';
import './ProgressLayout.css';

import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketBottom } from '../../TicketElement/TicketBottom/TicketBottom.jsx';

/**
 * 진행 과정 (티켓 발급 , 인증과정등) 제목, 내용 , 다음버튼을 필요로하는 레이아웃 입니다.
 * https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=680%3A13148
 * 자식 컴포넌트로 TicketBody, TicketBodyHeader, TicketBottom 를 필요로 합니다.
 */
export const ProgressLayout = ({ children, ...props }) => {
  // (제목+설명) + 내용(input 혹은 제목:ticketing-01, list-01) + 하단(다음으로버튼)
  return (
    <div className="vertical-grid ProgressLayout" {...props}>
      {children}
    </div>
  );
};

ProgressLayout.propTypes = {
  /**
   * TicketBody, TicketBodyHeader, TicketBottom 를 자식 컴포넌트로 요구합니다.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([TicketBody, TicketBodyHeader, TicketBottom])
      })
    )
  ]).isRequired
};
