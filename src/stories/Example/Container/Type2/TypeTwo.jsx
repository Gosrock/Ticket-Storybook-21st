import React from 'react';
import PropTypes from 'prop-types';
import './TypeTwo.css';

export const TypeTwo = ({ children }) => {
  // 상단(뒤로가기버튼) + (제목+설명) + 내용(티켓리스트)
  return (
    <div className="vertical-grid type-two">
      <div style={{ backgroundColor: '#9D9D9D' }}>top</div>
      <div style={{ backgroundColor: '#C4C4C4' }}>title and description</div>
      <div style={{ backgroundColor: '#9D9D9D' }}>input or title</div>
    </div>
  );
};

TypeTwo.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
