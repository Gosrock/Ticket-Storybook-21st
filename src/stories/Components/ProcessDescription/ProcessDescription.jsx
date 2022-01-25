import React from 'react';
import PropTypes from 'prop-types';
import './ProcessDescription.css';

/**
 * 진행과정속 부 설명부분입니다.
 */
export const ProcessDescription = ({ topLabel, bottomLabel, ...props }) => {
  return (
    <div {...props}>
      <p className={`ProcessDescription `}>{topLabel}</p>
      {bottomLabel && (
        <p className={`ProcessDescription proccessTitle-padding `}>
          {bottomLabel}
        </p>
      )}
    </div>
  );
};

ProcessDescription.propTypes = {
  /**
   * 위쪽의 텍스트를 변경할 수 있습니다.
   */
  topLabel: PropTypes.string.isRequired,

  /**
   * 아랫쪽의 텍스트를 변경할 수 있습니다. null 값으로 값을 안주셔도 됩니다.
   */
  bottomLabel: PropTypes.string
};

ProcessDescription.defaultProps = {
  topLabel: '위쪽 콘텐츠를 채워주세요',
  bottomLabel: null
};
