import React from 'react';
import PropTypes from 'prop-types';

const PublicArrowUpFilled = props => {
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
      <path d="M11.293 8.707a1 1 0 011.414 0l4.44 4.44a.5.5 0 01-.354.853H7.207a.5.5 0 01-.353-.854l4.439-4.439z"></path>
    </svg>
  );
};

PublicArrowUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicArrowUpFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicArrowUpFilled;
