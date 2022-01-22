import React from 'react';
import PropTypes from 'prop-types';
import { TicketBody } from '../TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketTop } from '../TicketTop/TicketTop.jsx';
import { TicketBottom } from '../TicketBottom/TicketBottom.jsx';
import './TicketContainer.css';

/**
 * Primary UI component for user interaction
 */
export const TicketContainer = ({ children }) => {
  console.log(children);

  return (
    <div className="Ticket-Container">
      <div className="Ticket-Inner-Container">{children}</div>
    </div>
  );
};

TicketContainer.propTypes = {
  /**
   * children components need
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([
          TicketBody,
          TicketBodyHeader,
          TicketTop,
          TicketBottom
        ])
      })
    ), // array of fields
    PropTypes.shape({
      type: PropTypes.oneOf([
        TicketBody,
        TicketBodyHeader,
        TicketTop,
        TicketBottom
      ])
    }) // singular field
  ]).isRequired
};

// TicketContainer.defaultProps = {
//   children: [<TicketTop />]
// };
