import React from 'react';
import PropTypes from 'prop-types';
import { Timer } from './Indicator/Timer.jsx';
import { ValidationDesc } from './Desc/ValidationDesc.jsx';
import './InputForm.css';

export const InputForm = ({
  type,
  placeholder,
  value,
  descComponent,
  onChange,
  resend
}) => {
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
          <Timer />
        </div>
        <div class="border-animate"></div>
      </div>
      <ValidationDesc resend={resend} />
    </>
  );
};

InputForm.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  resend: PropTypes.func
};

InputForm.defaultProps = {
  type: 'text',
  placeholder: 'placeholder를 입력해주세요'
};
