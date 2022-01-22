import React from 'react';
import PropTypes from 'prop-types';
import './TicketWrapContainer.css';

/**
 * Primary UI component for user interaction
 */
export const TicketWrapContainer = ({ children, ...props }) => {
  return (
    <div className="Ticket-Container-Wrap" {...props}>
      {children}
    </div>
  );
};
TicketWrapContainer.propTypes = {
  /**
   * any contents to display
   */
  children: PropTypes.node
};

// TicketContainer.defaultProps = {
//   children: [<TicketTop />]
// };
