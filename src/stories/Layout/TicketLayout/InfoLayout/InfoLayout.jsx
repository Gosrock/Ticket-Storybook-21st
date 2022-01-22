import React from 'react';
import PropTypes from 'prop-types';
import './InfoLayout.css';

import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';

export const InfoLayout = ({ children, ...props }) => {
  // (제목+설명) + 내용(티켓리스트)
  return (
    <div className="vertical-grid InfoLayout" {...props}>
      {children}
    </div>
  );
};

InfoLayout.propTypes = {
  /**
   * children components need
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([TicketBody, TicketBodyHeader])
      })
    ) // array of fields
  ]).isRequired
};
