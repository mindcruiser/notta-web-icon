import React from 'react';
import PropTypes from 'prop-types';

const AccountHelpCenter = props => {
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
      <path d="M12 5.313a4 4 0 00-4 4 1 1 0 102 0 2 2 0 112 2 1 1 0 00-1 1v2a1 1 0 102 0v-1.127a4.002 4.002 0 00-1-7.873z"></path>
      <path d="M12 18.813a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z"
      ></path>
    </svg>
  );
};

AccountHelpCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountHelpCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountHelpCenter;
