import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.css';

export const InputForm = ({
  type,
  placeholder,
  value,
  optionComponent,
  descComponent,
  onChange
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
        <div className="input-option">{optionComponent}</div>
        <div class="border-animate"></div>
      </div>
      {descComponent}
    </>
  );
};

InputForm.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  optionComponent: PropTypes.oneOf([])
};

InputForm.defaultProps = {
  type: 'text',
  placeholder: 'placeholder를 입력해주세요'
};
