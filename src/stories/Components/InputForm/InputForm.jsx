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
  /**
   * input type. text or number.
   */
  type: PropTypes.oneOf(['text', 'number']).isRequired,

  /**
   * placeholder의 내용
   */
  placeholder: PropTypes.string.isRequired,
  /*
  value
  */
  value: PropTypes.string,
  /*
  onchange function
  */
  onChange: PropTypes.func
};

InputForm.defaultProps = {
  type: 'text',
  placeholder: 'placeholder를 입력해주세요'
};
