import React from 'react';
import PropTypes from 'prop-types';
import './Ticket.css';
import { ReactComponent as GosrockLogo } from './GosrockLogo.svg';
import QRCode from 'qrcode.react';

export const Ticket = ({ date, place, payment, QRvalue }) => {
  return (
    <>
      <div className="ticket-background">
        <div className="ticket-box">
          <div
            className={[
              'ticket-container',
              `ticket-container-${payment}`,
              `ticket-container-${payment}-b`
            ].join(' ')}
          >
            <QRCode
              value={QRvalue}
              size={173}
              bgColor={'#ffffff'}
              fgColor={'#000000'}
              level={'L'}
              includeMargin={false}
              renderAs={'svg'}
              style={{ zIndex: 10 }}
            />
            <div></div>
          </div>
        </div>
        <div className="ticket-info">
          <span
            style={{
              color: 'white',
              fontSize: '26px',
              fontWeight: '700',
              lineHeight: '31.03px',
              display: 'block'
            }}
          >
            {date}
          </span>
          <span
            style={{
              color: '#B6B7B8',
              fontSize: '24px',
              fontWeight: '4510',
              lineHeight: '28.64px'
            }}
          >
            {place}
          </span>
        </div>
        <GosrockLogo className="ticket-logo" fill={'#b6b7b8'} />
      </div>
    </>
  );
};

Ticket.propTypes = {
  date: PropTypes.string,

  place: PropTypes.string,

  payment: PropTypes.bool,

  QRvalue: PropTypes.string
};

Ticket.defaultProps = {
  date: '22.03.10',
  place: 'CLUB 001',
  payment: false,
  QRvalue: 'https://github.com/Gosrock'
};
