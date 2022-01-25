import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { GoFrontButton } from '../GoFrontButton/GoFrontButton';

export const Modal = ({ onClickPurchased, onClickKakao }) => {
  return (
    <>
      <div className="modal-box">
        <div className="modal-container">
          <p
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '25px',
              marginTop: '20px'
            }}
          >
            입금하셨나요?
          </p>
          <p
            style={{
              color: '#B6B7B8',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '25px',
              marginTop: '5px'
            }}
          >
            입금하신 후에 다음으로 진행해주세요.
            <br />
            신한은행 110-234-567890 (홍길동)
          </p>
        </div>
        <div className="modal-bottom">
          <div className="modal-container">
            <GoFrontButton
              arrowCircleBackground={false}
              label="입금 완료"
              onClick={onClickPurchased}
            />
          </div>
          <div
            style={{
              height: '1px',
              width: '100%',
              backgroundColor: '#363636'
            }}
          ></div>
          <div className="modal-container">
            <GoFrontButton
              arrowCircleBackground={false}
              arrowColor="yellow"
              fontColor="gray"
              label="또는, 카카오페이로 송금하기"
              onClick={onClickKakao}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  /**
   * 클릭 이벤트 콜백 함수
   */
  onClickPurchased: PropTypes.func,
  /**
   * 클릭 이벤트 콜백 함수
   */
  onClickKakao: PropTypes.func
};
