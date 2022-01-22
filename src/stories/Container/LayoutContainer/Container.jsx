import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import { TypeOne } from '../Type1/TypeOne';
import { TypeTwo } from '../Type2/TypeTwo';
import { TypeThree } from '../Type3/TypeThree';

/**
 * Primary UI component for user interaction
 */
export const Container = ({ children }) => {
  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return (
    <>
      <div className="body-wrap">
        <div className="container">
          <div className="inner-container">{children}</div>
        </div>
      </div>
    </>
  );
};

Container.propTypes = {
  /**
   * Children contents
   */
  children: PropTypes.shape({
    type: PropTypes.oneOf([TypeOne, TypeTwo, TypeThree])
  }).isRequired // singular field
};

/* Container.defaultProps = {
  children: undefined
};
 */
