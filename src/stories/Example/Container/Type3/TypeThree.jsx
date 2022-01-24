import React from 'react';
import PropTypes from 'prop-types';
import './TypeThree.css';

export const TypeThree = ({ children }) => {
  // 상단(뒤로가기버튼) + 티켓
  return (
    <div className="vertical-grid type-three">
      <div style={{ backgroundColor: '#9D9D9D' }}>top</div>
      <div style={{ backgroundColor: '#C4C4C4' }}>ticket</div>
    </div>
  );
};

TypeThree.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
