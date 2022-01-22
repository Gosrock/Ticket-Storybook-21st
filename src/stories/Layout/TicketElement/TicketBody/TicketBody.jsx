import React from 'react';
import PropTypes from 'prop-types';
import './TicketBody.css';

export const TicketBody = ({ children, ...props }) => {
  return (
    <div className="TicketBody" {...props}>
      {children}
    </div>
  );
};

TicketBody.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
