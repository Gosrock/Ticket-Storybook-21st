import React from 'react';
import PropTypes from 'prop-types';

export const WonjinButton = ({ size, label }) => {
  return <button>{label}</button>;
};

WonjinButton.propTypes = {
  label: PropTypes.string.isRequired,

  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

WonjinButton.defaultProps = {
  label: 'wonjin',
  size: 'medium'
};
