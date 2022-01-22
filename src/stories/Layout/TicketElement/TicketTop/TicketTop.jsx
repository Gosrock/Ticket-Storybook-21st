import React from 'react';
import PropTypes from 'prop-types';
import './TicketTop.css';

export const TicketTop = ({ children, ...props }) => {
  return (
    <div className="TicketTop" {...props}>
      {children}
    </div>
  );
};

TicketTop.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};
