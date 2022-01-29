import React from 'react';
import PropTypes from 'prop-types';
import { TicketTop } from '../TicketElement/TicketTop/TicketTop.jsx';
import { InfoLayout } from '../TicketLayout/InfoLayout/InfoLayout.jsx';
import { ProgressLayout } from '../TicketLayout/ProgressLayout/ProgressLayout.jsx';
import { TicketLayout } from '../TicketLayout/TicketLayout/TicketLayout.jsx';
import './TicketContainer.css';

/**
 * 티켓 발급,인증 과정에서 TicketWarpContainer의 자식 컴포넌트로 들어갑니다
 * 상단 뒤로가기버튼 영역과 , 그 영역을 제외한 나머지 영역으로 나뉘어져 있습니다
 * grid : 1fr 7fr 입니다.
 * TopElemnt prop으로 TicketTop 컴포넌트를 받으며
 * children으로 TicketLayout, ProgressLayout, InfoLayout 중 하나의 레이아웃을 자식으로 받습니다.
 */
export const TicketContainer = ({ TopElement, children, ...props }) => {
  return (
    <div className="Ticket-Container" {...props}>
      <div className="Ticket-Inner-Container">
        <div className="Ticket-Inner-Top">
          {TopElement ? TopElement : <TopElement />}
        </div>
        <div className="Ticket-Inner-Content">{children}</div>
      </div>
    </div>
  );
};

TicketContainer.propTypes = {
  /**
   * TicketLayout, ProgressLayout, InfoLayout 중 하나의 레이아웃을 인자로 받습니다.
   */
  children: PropTypes.oneOfType([
    // PropTypes.arrayOf(
    //   PropTypes.shape({
    //     type: PropTypes.oneOf([TicketLayout, ProgressLayout, InfoLayout])
    //   })
    // ), // array of fields
    PropTypes.shape({
      type: PropTypes.oneOf([TicketLayout, ProgressLayout, InfoLayout])
    })
  ]).isRequired,
  /**
   * TicketTop 컴포넌트를 인자로 받습니다.
   */
  TopElement: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([TicketTop])
    })
  ])
};
TicketContainer.defaultProps = {
  TopElement: <TicketTop />
};
