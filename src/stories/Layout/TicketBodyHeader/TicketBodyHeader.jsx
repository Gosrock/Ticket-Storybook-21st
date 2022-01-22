import React from 'react';
import PropTypes from 'prop-types';
import './TicketBodyHeader.css';

export const TicketBodyHeader = ({ children }) => {
  return <div className="TicketBodyHeader">{children}</div>;
};

TicketBodyHeader.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
