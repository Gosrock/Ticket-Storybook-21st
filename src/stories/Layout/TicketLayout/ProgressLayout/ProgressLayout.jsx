import React from 'react';
import PropTypes from 'prop-types';
import './ProgressLayout.css';

import { TicketBody } from '../../TicketElement/TicketBody/TicketBody.jsx';
import { TicketBodyHeader } from '../../TicketElement/TicketBodyHeader/TicketBodyHeader.jsx';
import { TicketBottom } from '../../TicketElement/TicketBottom/TicketBottom.jsx';

export const ProgressLayout = ({ children, ...props }) => {
  // (제목+설명) + 내용(input 혹은 제목:ticketing-01, list-01) + 하단(다음으로버튼)
  return (
    <div className="vertical-grid ProgressLayout" {...props}>
      {children}
    </div>
  );
};

ProgressLayout.propTypes = {
  /**
   * children components need
   */

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([TicketBody, TicketBodyHeader, TicketBottom])
      })
    )
  ]).isRequired
};
