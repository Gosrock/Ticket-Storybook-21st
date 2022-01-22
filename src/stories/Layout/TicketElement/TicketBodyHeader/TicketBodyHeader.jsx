import React from 'react';
import PropTypes from 'prop-types';
import './TicketBodyHeader.css';

export const TicketBodyHeader = ({ children, ...props }) => {
  return (
    <div className="TicketBodyHeader" {...props}>
      {children}
    </div>
  );
};

TicketBodyHeader.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
