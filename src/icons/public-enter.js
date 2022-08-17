import React from 'react';
import PropTypes from 'prop-types';

const PublicEnter = props => {
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
      <path d="M15 4a1 1 0 100 2h4a1 1 0 011 1v5a1 1 0 01-1 1H5.414l3.293-3.293a1 1 0 00-1.414-1.414l-5 5a.997.997 0 000 1.415l5 5a1 1 0 001.414-1.415L5.414 15H19a3 3 0 003-3V7a3 3 0 00-3-3h-4z"></path>
    </svg>
  );
};

PublicEnter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicEnter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicEnter;
