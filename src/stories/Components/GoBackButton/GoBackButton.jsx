import React from 'react';
import PropTypes from 'prop-types';
import './GoBackButton.css';
import { ReactComponent as GoBackArrow } from './GoBackArrow.svg';

/**
 * 뒤로가기 버튼
 */
export const GoBackButton = ({ label, ...props }) => {
  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return (
    <>
      <button
        className={['goBackButton', `goBackButton--medium`].join(' ')}
        {...props}
      >
        <div style={{ marginRight: '13px' }}>
          <GoBackArrow />
        </div>
        {label}
      </button>
    </>
  );
};

GoBackButton.propTypes = {
  /**
   * 라벨 , 안의 텍스트를 변경할 수 있습니다.
   */
  label: PropTypes.string.isRequired,
  /**
   * 클릭 이벤트 콜백 함수
   */
  onClick: PropTypes.func
};

GoBackButton.defaultProps = {
  onClick: undefined,
  label: '뒤로가기'
};
