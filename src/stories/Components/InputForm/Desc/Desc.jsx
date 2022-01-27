import React from 'react';
import PropTypes from 'prop-types';
import './Desc.css';

export const Desc = ({ desc }) => {
  return (
    <div>
      <p className="Desc">{desc}</p>
    </div>
  );
};

Desc.propTypes = {};
