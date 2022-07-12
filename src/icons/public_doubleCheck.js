import React from 'react';
import PropTypes from 'prop-types';

const PublicDoubleCheck = props => {
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
      <path d="M11.602 13.76l.705.704a1 1 0 001.414 0l7.052-7.051a1 1 0 111.414 1.414l-8.466 8.465a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 011.414-1.414l1.418 1.418 1.413 1.412v.002zm.002-2.829l4.247-4.247a.997.997 0 111.41 1.41l-4.247 4.248-1.41-1.41zM8.07 15.88a1 1 0 11-1.413 1.413l-4.95-4.95a1 1 0 111.414-1.415l.706.706-.001.002L8.07 15.88z"></path>
    </svg>
  );
};

PublicDoubleCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicDoubleCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicDoubleCheck;
