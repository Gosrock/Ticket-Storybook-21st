import React from 'react';
import PropTypes from 'prop-types';
import './GoBackButton.css';
import { ReactComponent as GoBackArrow } from './GoBackArrow.svg';

/**
 * Primary UI component for user interaction
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
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

GoBackButton.defaultProps = {
  onClick: undefined,
  label: '뒤로가기'
};
