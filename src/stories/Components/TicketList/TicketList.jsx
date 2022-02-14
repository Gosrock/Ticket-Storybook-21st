import React from 'react';
import PropTypes from 'prop-types';
import './TicketList.css';
import { ReactComponent as GosrockLogo } from './GosrockLogo.svg';
import { ReactComponent as Car } from './Car.svg';
import { ReactComponent as QR } from './QR.svg';
//import { StateIcon } from '../StateIcon/StateIcon.jsx';

export const TicketList = ({ onClickQR, ...props }) => {
  return (
    <>
      <button className={'TicketList-item'} {...props}>
        <div
          className="TicketList-button-left"
          onClick={() => {
            window.open(
              'https://m.place.naver.com/place/36995079/home?entry=ple',
              '',
              '_blank'
            );
          }}
        >
          <Car />
          <div style={{ fontWeight: '700', marginLeft: '13px', color: '#000' }}>
            오시는 길
          </div>
        </div>
        <div className={'TicketList-rec'}></div>
        <div className="TicketList-button-right" onClick={onClickQR}>
          <div
            style={{ fontWeight: '700', marginRight: '13px', color: '#000' }}
          >
            QR코드 보기
          </div>
          <QR />
        </div>

        <GosrockLogo className={'TicketList-icon'} />
      </button>
    </>
  );
};

/* TicketList.propTypes = {
  performdate: PropTypes.string.isRequired,
  bookdate: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  StateIcon: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([StateIcon])
    })
  ]).isRequired
}; */

TicketList.propTypes = {
  onClickQR: PropTypes.func
};

TicketList.defaultProps = {
  onClickQR: undefined
};
