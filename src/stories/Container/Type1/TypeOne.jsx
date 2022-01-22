import React from 'react';
import PropTypes from 'prop-types';
import './TypeOne.css';

export const TypeOne = ({ children }) => {
  //상단(뒤로가기버튼) + (제목+설명) + 내용(input 혹은 제목:ticketing-01, list-01) + 하단(다음으로버튼)
  return (
    <div className="vertical-grid type-one">
      <div style={{ backgroundColor: '#9D9D9D' }}>top</div>
      <div style={{ backgroundColor: '#C4C4C4' }}>title and description</div>
      <div style={{ backgroundColor: '#9D9D9D' }}>input or title</div>
      <div style={{ backgroundColor: '#C4C4C4' }}>bottom</div>
    </div>
  );
};

TypeOne.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
