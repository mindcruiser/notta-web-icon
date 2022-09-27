import React from 'react';
import PropTypes from 'prop-types';

const PublicArrowDownTail = props => {
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
      <path d="M17.293 14.293a1 1 0 011.414 1.414l-6 6a.997.997 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L11 18.586V3a1 1 0 112 0v15.586l4.293-4.293z"></path>
    </svg>
  );
};

PublicArrowDownTail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicArrowDownTail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicArrowDownTail;
