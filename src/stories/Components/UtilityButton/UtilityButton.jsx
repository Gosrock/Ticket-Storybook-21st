import React from 'react';
import PropTypes from 'prop-types';
import './UtilityButton.css';
import { ReactComponent as ShareAlt } from './ShareAlt.svg';
import { ReactComponent as KakaoTalk } from './KakaoTalk.svg';

export const UtilityButton = ({ label, backgroundColor, logo, ...props }) => {
  return (
    <>
      <button
        className={[
          'UtilityButton',
          `UtilityButton--backgroundColor-${backgroundColor}`
        ].join(' ')}
        {...props}
      >
        <span>{label}</span>
        <div style={{ marginLeft: '11px' }} className={`UtilityButton--logo`}>
          {logo === 'share' ? <ShareAlt /> : <KakaoTalk />}
        </div>
      </button>
    </>
  );
};

UtilityButton.propTypes = {
  label: PropTypes.string.isRequired,

  backgroundColor: PropTypes.oneOf(['white', 'yellow']),

  logo: PropTypes.oneOf(['share', 'kakaoTalk']),

  onClick: PropTypes.func
};

UtilityButton.defaultProps = {
  label: 'label 입력',
  backgroundColor: 'white',
  logo: 'share'
};
