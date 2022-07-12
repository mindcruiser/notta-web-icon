import React from 'react';
import PropTypes from 'prop-types';

const PublicAddCircle = props => {
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
      <path d="M12 7.5a1 1 0 011 1V11h2.5a1 1 0 110 2H13v2.5a1 1 0 11-2 0V13H8.5a1 1 0 110-2H11V8.5a1 1 0 011-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"
      ></path>
    </svg>
  );
};

PublicAddCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicAddCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicAddCircle;
