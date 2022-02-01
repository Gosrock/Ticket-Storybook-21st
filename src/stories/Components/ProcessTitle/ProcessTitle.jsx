import React from 'react';
import PropTypes from 'prop-types';
import './ProcessTitle.css';

/**
 * 진행과정속 제목입니다.
 */
export const ProcessTitle = ({
  topLabel,
  bottomLabel,
  textAlign,
  textSize,
  ...props
}) => {
  return (
    <div className="ProcessTitle-wrapper" {...props}>
      <p
        className={`processTitle proccessTitle-align-${textAlign} processTitle-size-${textSize}`}
      >
        {topLabel}
      </p>
      <p
        className={`processTitle proccessTitle-padding proccessTitle-align-${textAlign} processTitle-size-${textSize}`}
      >
        {bottomLabel}
      </p>
    </div>
  );
};

ProcessTitle.propTypes = {
  /**
   * 위쪽의 텍스트를 변경할 수 있습니다.
   */
  topLabel: PropTypes.string.isRequired,

  /**
   * 아랫쪽의 텍스트를 변경할 수 있습니다.
   */
  bottomLabel: PropTypes.string.isRequired,
  /**
   * 텍스트의 크기를 정할 수 있습니다.
   */
  textSize: PropTypes.oneOf(['big', 'medium']),
  /**
   * 텍스트의 정렬방향을 정할 수 있습니다.
   */
  textAlign: PropTypes.oneOf(['right', 'left'])
};

ProcessTitle.defaultProps = {
  topLabel: '위쪽 콘텐츠를 채워주세요',
  bottomLabel: '아랫쪽 채워주세요',
  textAlign: 'left',
  textSize: 'medium'
};
