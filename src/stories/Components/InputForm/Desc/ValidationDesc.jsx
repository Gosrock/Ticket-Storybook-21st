import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './ValidationDesc.css';

export const ValidationDesc = ({ ...props }) => {
  return (
    <div>
      <p className="validationDesc">
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
