import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Indicator.css';

export const Price = ({ ticketCount }) => {
  return (
    <div className="indicator">
      <p>
        {3000 * ticketCount}₩ ({ticketCount}매)
      </p>
    </div>
  );
};
