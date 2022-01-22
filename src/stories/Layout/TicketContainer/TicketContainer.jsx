import React from 'react';
import PropTypes from 'prop-types';
import { TicketTop } from '../TicketElement/TicketTop/TicketTop.jsx';
import { InfoLayout } from '../TicketLayout/InfoLayout/InfoLayout.jsx';
import { ProgressLayout } from '../TicketLayout/ProgressLayout/ProgressLayout.jsx';
import { TicketLayout } from '../TicketLayout/TicketLayout/TicketLayout.jsx';
import './TicketContainer.css';

/**
 * Primary UI component for user interaction
 */
export const TicketContainer = ({ TopElement, children, ...props }) => {
  console.log(children);

  return (
    <div className="Ticket-Container" {...props}>
      <div className="Ticket-Inner-Container">
        <div className="Ticket-Inner-Top">
          {TopElement ? TopElement : <TopElement />}
        </div>
        <div className="Ticket-Inner-Content">{children}</div>
      </div>
    </div>
  );
};

TicketContainer.propTypes = {
  /**
   * children components need
   */
  children: PropTypes.oneOfType([
    // PropTypes.arrayOf(
    //   PropTypes.shape({
    //     type: PropTypes.oneOf([TicketLayout, ProgressLayout, InfoLayout])
    //   })
    // ), // array of fields
    PropTypes.shape({
      type: PropTypes.oneOf([TicketLayout, ProgressLayout, InfoLayout])
    })
  ]).isRequired,

  TopElement: PropTypes.oneOfType([
    PropTypes.shape({
      type: TicketTop
    })
  ])
};
TicketContainer.defaultProps = {
  TopElement: <TicketTop />
};
