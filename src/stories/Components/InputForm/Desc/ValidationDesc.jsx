import React from 'react';
import PropTypes from 'prop-types';
import './Desc.css';

export const ValidationDesc = ({ ...props }) => {
  return (
    <div>
      <p className="Desc">
        문자가 오지 않았나요? &nbsp;&nbsp;
        <span className="resend" {...props}>
          재전송
        </span>
      </p>
    </div>
  );
};

ValidationDesc.propTypes = {
  /**
   * 인증번호 재전송함수
   */
  onClick: PropTypes.func
};
