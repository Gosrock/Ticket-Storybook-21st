import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Timer } from './Indicator/Timer.jsx';
import { Price } from './Indicator/Price.jsx';
import { ValidationDesc } from './Desc/ValidationDesc.jsx';
import './InputForm.css';

export const InputForm = ({
  type,
  placeholder,
  value,
  onChange,
  resend,
  isValidate,
  isTicketing,
  ticketCount
}) => {
  const [time, setTime] = useState(180);

  return (
    <>
      <div className="input-form">
        <input
          className="input-box"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div className="input-indicator">
          {isValidate && <Timer time={time} setTime={setTime} />}
          {isTicketing && <Price ticketCount={ticketCount} />}
        </div>
        <div class="border-animate"></div>
      </div>
      {isValidate && (
        <ValidationDesc
          onClick={() => {
            resend();
            setTime(180);
          }}
        />
      )}
    </>
  );
};

InputForm.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  resend: PropTypes.func,
  isValidate: PropTypes.bool,
  isTicketing: PropTypes.bool,
  ticketCount: PropTypes.number
};

InputForm.defaultProps = {
  type: 'text',
  placeholder: 'placeholder를 입력해주세요',
  ticketCount: 1,
  resend: () => {}
};
