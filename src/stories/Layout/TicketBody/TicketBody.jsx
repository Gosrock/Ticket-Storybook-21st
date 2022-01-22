import React from 'react';
import PropTypes from 'prop-types';
import './TicketBody.css';

export const TicketBody = ({ children }) => {
  return <div className="TicketBody">{children}</div>;
};

TicketBody.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};