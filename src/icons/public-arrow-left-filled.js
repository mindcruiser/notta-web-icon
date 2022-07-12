import React from 'react';
import PropTypes from 'prop-types';

const PublicArrowLeftFilled = props => {
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
      <path d="M8.707 12.707a1 1 0 010-1.414l4.44-4.44a.5.5 0 01.853.354v9.586a.5.5 0 01-.854.353l-4.439-4.439z"></path>
    </svg>
  );
};

PublicArrowLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicArrowLeftFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicArrowLeftFilled;
