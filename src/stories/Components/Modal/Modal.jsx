import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { GoFrontButton } from '../GoFrontButton/GoFrontButton.jsx';
import { ReactComponent as Close } from './Close.svg';

export const Modal = ({
  onClickPurchased,
  onClickKakao,
  onClickClose,
  accountName,
  accountNumber,
  page
}) => {
  let removeToast;

  const toast = string => {
    const toast = document.getElementById('toast');

    if (toast.classList.contains('reveal')) {
      clearTimeout(removeToast);
      removeToast = setTimeout(function () {
        document.getElementById('toast').classList.remove('reveal');
      }, 1000);
    } else {
      removeToast = setTimeout(function () {
        document.getElementById('toast').classList.remove('reveal');
      }, 1000);
    }

    toast.classList.add('reveal');
    toast.innerText = '계좌 복사가 완료되었습니다.';
  };

  const copyNumber = () => {
    const value = accountNumber.replace(/\-/g, ''); //특정문자(-) 제거
    console.log(value);
    navigator.clipboard.writeText(value);
    toast();
  };

  return (
    <>
      <div className="modal-box">
        <div className="modal-container">
          <div className="title">
            {page === 'ticketing' ? (
              <p>
                이제 마지막이에요! <br />
                입금을 완료한 후에 진행해 주세요.
              </p>
            ) : (
              <p>
                입금계좌 보기
                <br />
                <br />
              </p>
            )}
          </div>
          <div className="description">
            {accountName}
            <div>
              <span style={{ color: '#BF94E4' }}>{accountNumber}</span>
              <span
                className="copyNumber"
                style={{
                  fontSize: '14px',
                  padding: '3px 7px',
                  borderRadius: '5px',
                  backgroundColor: '#363636',
                  color: '#b6b7b8',
                  marginLeft: '8px',
                  cursor: 'default'
                }}
                onClick={copyNumber}
              >
                번호 복사
              </span>
            </div>
          </div>
        </div>
        <div className="modal-bottom">
          <div className="modal-container">
            {page === 'ticketing' ? (
              <GoFrontButton
                arrowCircleBackground={false}
                arrowColor="yellow"
                fontColor="gray"
                label="또는, 카카오페이로 송금하기"
                onClick={onClickKakao}
              />
            ) : (
              <GoFrontButton
                arrowCircleBackground={false}
                arrowColor="yellow"
                fontColor="gray"
                label="카카오페이로 송금하기"
                onClick={onClickKakao}
              />
            )}
          </div>
          <div
            style={{
              height: '1px',
              width: '100%',
              backgroundColor: '#363636'
            }}
          ></div>
          <div className="modal-container">
            {page === 'ticketing' ? (
              <GoFrontButton
                arrowCircleBackground={false}
                label="입금 완료"
                onClick={onClickPurchased}
              />
            ) : (
              <button className="CloseButton" onClick={onClickClose}>
                <span>닫기</span>
                <div style={{ marginLeft: '11px' }}>
                  <Close />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      <div id="toast"></div>
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
  onClickKakao: PropTypes.func,
  /**
   * 클릭 이벤트 콜백 함수
   */
  onClickClose: PropTypes.func,
  /**
   * 계좌 이름 ex. 신한 (홍길동)
   */
  accountName: PropTypes.string,
  /**
   * 계좌 번호 /  (-)포함해서 받습니다.
   */
  accountNumber: PropTypes.string,
  /**
   * 페이지 : (ticketing / list)
   */
  page: PropTypes.oneOf(['ticketing', 'list'])
};

Modal.defaultProps = {
  accountName: '신한 (홍길동)',
  accountNumber: '110-234-567890',
  page: 'ticketing'
};
