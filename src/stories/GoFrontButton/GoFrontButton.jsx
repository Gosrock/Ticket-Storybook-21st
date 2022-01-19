import React from 'react';
import PropTypes from 'prop-types';
import './GoFrontButton.css';
import { ReactComponent as GoFrontArrow } from './GoFrontArrow.svg';

/**
 * Primary UI component for user interaction
 */
export const GoFrontButton = ({
  label,
  fontColor,
  arrowColor,
  arrowCircleBackground,
  ...props
}) => {
  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return (
    <>
      <button
        className={[
          'GoFrontButton',
          `GoFrontButton--medium`,
          `GoFrontButton--font-${fontColor}`
        ].join(' ')}
        {...props}
      >
        <span>{label}</span>
        <div
          style={{ marginLeft: '11px' }}
          className={arrowCircleBackground ? 'GoFrontButton--circle' : ''}
        >
          <GoFrontArrow fill={arrowColor === 'gray' ? '#b6b7b8' : arrowColor} />
        </div>
      </button>
    </>
  );
};

GoFrontButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * 폰트의 컬러를 변경할수 있습니다. 기본은 white 입니다,
   */
  fontColor: PropTypes.oneOf(['white', 'gray']),
  /**
   * 화살표의 색을 변경할수 있습니다. 기본은 white 입니다,
   */
  arrowColor: PropTypes.oneOf(['white', 'yellow', 'gray']),
  /**
   * 화살표 배경에 원을 지정할 수 있습니다. 기본은 true 입니다,
   */
  arrowCircleBackground: PropTypes.bool
};

GoFrontButton.defaultProps = {
  onClick: undefined,
  label: 'label을 입력해 주세요.',
  arrowColor: 'white',
  arrowCircleBackground: true,
  fontColor: 'white'
};
