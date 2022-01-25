import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export const Modal = () => {
  return (
    <>
      <div className="modal-box">
        <p
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '22px'
          }}
        >
          입금하셨나요?
        </p>
        <p
          style={{
            color: '#B6B7B8',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '22px'
          }}
        >
          입금하신 후에 다음으로 진행해주세요.
          <br />
          신한은행 110-234-567890 (홍길동)
        </p>
      </div>
    </>
  );
};

Modal.propTypes = {};
