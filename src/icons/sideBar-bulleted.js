import React from 'react';
import PropTypes from 'prop-types';

const SideBarBulleted = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};

SideBarBulleted.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarBulleted.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarBulleted;
