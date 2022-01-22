import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

/**
 * Primary UI component for user interaction
 */
export const Container = ({ children, ...props }) => {
  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  return (
    <>
      <div className="body-wrap">
        <div className="container">
          <div className="inner-container">
            <div className="vertical-grid">
              <div style={{ color: 'white' }}>grid1</div>
              <div style={{ color: 'white' }}>grid2</div>
              <div style={{ color: 'white' }}>grid3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Container.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.node
};

Container.defaultProps = {
  children: undefined
};
