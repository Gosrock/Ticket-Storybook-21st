import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './ValidationDesc.css';

export const ValidationDesc = ({ resend }) => {
  return (
    <div>
      <p className="validationDesc">
        문자가 오지 않았나요? &nbsp;&nbsp;
        <span style={{ color: 'white', cursor: 'default' }} onClick={resend}>
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
  resend: PropTypes.func
};
