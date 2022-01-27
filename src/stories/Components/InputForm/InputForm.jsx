import React, { useState, useRef, useEffect } from 'react';
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
      type: 'number',
      placeholder: '휴대폰 번호 입력',
      limit: 11
    },
    validate: {
      type: 'number',
      placeholder: '인증번호 입력',
      limit: 6
    },
    count: {
      type: 'number',
      placeholder: '1',
      limit: 2
    },
    name: {
      type: 'string',
      placeholder: '입금자명',
      limit: 5
    }
  };
  const [time, setTime] = useState(180);
  const input = useRef();

  const selectPage = pageObj[page];

  const handleValidateNumber = (e, limit) => {
    if (e.target.value.length >= limit) e.target.blur();
  };

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <>
      <div className="input-form">
        <input
          className="input-box"
          type={selectPage.type}
          value={value}
          onChange={e => {
            onChange();
            handleValidateNumber(e, selectPage.limit);
            if (page == 'count' && e.target.value > 10) {
              e.target.value = 10;
            }
            if (page == 'name') {
              const inputValue = e.target.value;
              if (inputValue.length > 4) {
                e.target.value = inputValue.slice(0, -1);
              }
            }
          }}
          placeholder={selectPage.placeholder}
          ref={input}
        />
        <div className="input-indicator">
          {page == 'validate' && <Timer time={time} setTime={setTime} />}
          {page == 'count' && <Price ticketCount={ticketCount} />}
          {page == 'name' && <Price ticketCount={ticketCount} />}
        </div>
        <div class="border-animate"></div>
      </div>
      {page == 'validate' && (
        <ValidationDesc
          onClick={() => {
            resend();
            alert('인증번호가 재전송되었습니다.');
            setTime(180);
          }}
        />
      )}
      {page == 'count' && (
        <Desc desc={'티켓은 한번에 10매까지 구매 가능합니다.'} />
      )}
      {page == 'name' && <Desc desc={'이름은 4자 이내로 입력해주세요.'} />}
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
