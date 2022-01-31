import React from 'react';
import PropTypes from 'prop-types';
import './TicketList.css';
import { ReactComponent as GosrockLogo } from './GosrockLogo.svg';
import { StateIcon } from '../StateIcon/StateIcon.jsx';

export const TicketList = ({ StateIcon, performdate, bookdate, ...props }) => {
  return (
    <>
      <button className={'TicketList'}>
        <div className={'TicketList-ticketState'}>{StateIcon}</div>
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
  onClick: PropTypes.func,
  StateIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([StateIcon])
    })
  ]).isRequired
};

TicketList.defaultProps = {
  onClick: undefined,
  performdate: '공연일',
  bookdate: '예매일'
};
