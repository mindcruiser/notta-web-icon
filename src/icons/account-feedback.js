import React from 'react';
import PropTypes from 'prop-types';

const AccountFeedback = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H7.333L3.6 21.8A1 1 0 012 21V4zm2 1v14l2.4-1.8A1 1 0 017 17h13V5H4zm8 1.5a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0 9a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

AccountFeedback.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountFeedback.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountFeedback;
