import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Timer } from './Indicator/Timer.jsx';
import { Price } from './Indicator/Price.jsx';
import { ValidationDesc } from './Desc/ValidationDesc.jsx';
import { Desc } from './Desc/Desc.jsx';
import './InputForm.css';

export const InputForm = ({
  page,
  /*   type,
  placeholder,
  isValidate,
  isTicketing,
  limit, */
  value,
  onChange,
  resend,
  ticketCount
}) => {
  const pageObj = {
    default: {
      type: 'string',
      placeholder: 'placeholder 입력'
    },
    phone: {
      type: 'tel',
      placeholder: '휴대폰 번호 입력',
      limit: 11
    },
    validate: {
      type: 'tel',
      placeholder: '인증번호 입력',
      limit: 6
    },
    count: {
      type: 'tel',
      placeholder: '1',
      limit: 1
    },
    name: {
      type: 'string',
      placeholder: '입금자명',
      limit: 5
    }
  };
  const [time, setTime] = useState(180);
  const [countInput, setcountInput] = useState(1);
  // const input = useRef();

  const selectPage = pageObj[page];

  const handleValidateNumber = (e, limit) => {
    if (e.target.value.length >= limit) e.target.blur();
  };

  const inputRef = useCallback(node => {
    if (node !== null) {
      // console.log(node);
      node.focus();
    }
  }, []);
  // useEffect(() => {
  //   console.log('if out', input.current);

  //   if (input.current) {
  //     console.log('if in', input.current);
  //     input.current.focus();
  //   }
  // }, [input]);

  return (
    <>
      <div className="input-form">
        <input
          className="input-box"
          type={selectPage.type}
          value={value}
          onChange={e => {
            onChange(e);
            handleValidateNumber(e, selectPage.limit);
            if (page === 'count') {
              setcountInput(e.target.value);
            }
            if (page === 'name') {
              const inputValue = e.target.value;
              if (inputValue.length > 4) {
                e.target.value = inputValue.slice(0, -1);
              }
            }
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.target.blur();
            }
          }}
          placeholder={selectPage.placeholder}
          ref={inputRef}
        />
        <div className="input-indicator">
          {page === 'validate' && <Timer time={time} setTime={setTime} />}
          {page === 'count' && <Price ticketCount={countInput} />}
          {page === 'name' && <Price ticketCount={ticketCount} />}
        </div>
        <div className="border-animate"></div>
      </div>
      {page === 'validate' && (
        <ValidationDesc
          onClick={() => {
            resend();
            alert('인증번호가 재전송되었습니다.');
            setTime(180);
          }}
        />
      )}
    </>
  );
};

InputForm.propTypes = {
  page: PropTypes.oneOf(['default', 'phone', 'validate', 'count', 'name']),
  /*   type: PropTypes.oneOf(['text', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  isValidate: PropTypes.bool,
  isTicketing: PropTypes.bool,
  limit: PropTypes.number, */
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  resend: PropTypes.func,
  ticketCount: PropTypes.number
};

InputForm.defaultProps = {
  /*   type: 'text',
  placeholder: 'placeholder를 입력해주세요',
   */
  ticketCount: 1,
  resend: () => {},
  onChange: () => {}
};
