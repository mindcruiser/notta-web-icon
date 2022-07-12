import React from 'react';
import PropTypes from 'prop-types';

const PublicBackLeft = props => {
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
      <path d="M9.707 6.707a1 1 0 00-1.414-1.414l-6 6a.997.997 0 000 1.414l6 6a1 1 0 001.414-1.414L5.414 13H21a1 1 0 100-2H5.414l4.293-4.293z"></path>
    </svg>
  );
};

PublicBackLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicBackLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicBackLeft;
