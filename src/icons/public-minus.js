import React from 'react';
import PropTypes from 'prop-types';

const PublicMinus = props => {
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
      <path d="M5 12h14"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

PublicMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicMinus;
