import React from 'react';
import PropTypes from 'prop-types';
import './Ticket.css';
import { ReactComponent as GosrockLogo } from './GosrockLogoWhite.svg';
import QRCode from 'qrcode.react';

export const Ticket = ({ date, place, payment }) => {
  return (
    <>
      <div className="background">
        <div className="ticket-box">
          <div
            className={['ticket-container', `ticket-container-${payment}`].join(
              ' '
            )}
          >
            <QRCode
              value={'http://picturesofpeoplescanningqrcodes.tumblr.com/'}
              size={173}
              bgColor={'#ffffff'}
              fgColor={'#000000'}
              level={'L'}
              includeMargin={false}
              renderAs={'svg'}
            />
          </div>
        </div>
        <div className="info">
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
        <div className="logo">
          <GosrockLogo></GosrockLogo>
        </div>
      </div>
    </>
  );
};

Ticket.propTypes = {
  date: PropTypes.string,

  place: PropTypes.string,

  payment: PropTypes.bool
};

Ticket.defaultProps = {
  date: '22.03.10',
  place: 'CLUB 001',
  payment: false
};
