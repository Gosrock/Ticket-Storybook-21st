import React from 'react';
import PropTypes from 'prop-types';
import './TicketWrapContainer.css';
import { TicketContainer } from '../TicketContainer/TicketContainer.jsx';

/**
 *  티켓 발급 , 확인 , 인증 과정에서 TicketContainer 를 감싸는 컨테이너 입니다
 *  모바일 화면에 맞게 height 를 설정한 컴포넌트 입니다.
 */
export const TicketWrapContainer = ({ children, ...props }) => {
  return (
    <div className="Ticket-Container-Wrap" {...props}>
      {children}
    </div>
  );
};
TicketWrapContainer.propTypes = {
  /**
   *  자식 컴포넌트로 TicketContainer를 필요로 합니다.
   */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([TicketContainer])
    })
  ]).isRequired
};
