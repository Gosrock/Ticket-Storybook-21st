import React from 'react';
import PropTypes from 'prop-types';
import './TicketList.css';
import { ReactComponent as GosrockLogo } from './GosrockLogo.svg';
import {
  입금확인중,
  입금확인,
  미입금처리,
  입장완료
} from '../StateIcon/StateIcon.stories.jsx';

export const TicketList = ({ performdate, bookdate, ...props }) => {
  return (
    <>
      <button className={'TicketList'}>
        <div className={'TicketList-ticketState'}>
          <입금확인></입금확인>
        </div>
        <div className={'TicketList-rec'}></div>
        <div className={'TicketList-info'}>
          <div>
            <p>
              <span style={{ fontWeight: '700' }}>공연일</span> {performdate}
            </p>
          </div>
          <div>
            <p>
              <span style={{ fontWeight: '700' }}>예매일</span> {bookdate}
            </p>
          </div>
        </div>

        <GosrockLogo className={'TicketList-icon'} />
      </button>
    </>
  );
};

TicketList.propTypes = {
  date1: PropTypes.string.isRequired,
  date2: PropTypes.string.isRequired,
  performdate: PropTypes.string.isRequired,
  bookdate: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

TicketList.defaultProps = {
  onClick: undefined,
  performdate: '공연일',
  bookdate: '예매일'
};
