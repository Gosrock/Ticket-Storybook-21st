import React from 'react';
import PropTypes from 'prop-types';
import './TicketBottom.css';

export const TicketBottom = ({ children, ...props }) => {
  return (
    <div className="TicketBottom" {...props}>
      {children}
    </div>
  );
};

TicketBottom.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
