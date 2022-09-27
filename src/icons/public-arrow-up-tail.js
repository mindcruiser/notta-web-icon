import React from 'react';
import PropTypes from 'prop-types';

const PublicArrowUpTail = props => {
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
      <path d="M17.293 9.707a1 1 0 001.414-1.414l-6-6a.997.997 0 00-1.414 0l-6 6a1 1 0 001.414 1.414L11 5.414V21a1 1 0 102 0V5.414l4.293 4.293z"></path>
    </svg>
  );
};

PublicArrowUpTail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicArrowUpTail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicArrowUpTail;
