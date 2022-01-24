import React from 'react';
import PropTypes from 'prop-types';
import './InfoLayout.css';
import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';

/**
 * 내 티켓 리스트 정보를 담는 인포 레이아웃입니다.
 * 제목과 설명을 담는
 * https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=343%3A13341
 * 자식 컴포넌트로 TicketBody,TicketBodyHeader 를 필요로 합니다.
 */
export const InfoLayout = ({ children, ...props }) => {
  // (제목+설명) + 내용(티켓리스트)
  return (
    <div className="vertical-grid InfoLayout" {...props}>
      {children}
    </div>
  );
};

InfoLayout.propTypes = {
  /**
   * TicketBody, TicketBodyHeader 를 자식 컴포넌트로 요구합니다.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([TicketBody, TicketBodyHeader])
      })
    ) // array of fields
  ]).isRequired
};
