import React from 'react';
import PropTypes from 'prop-types';
import './TicketTop.css';

export const TicketTop = ({ children }) => {
  return <div className="TicketTop">{children}</div>;
};

TicketTop.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
