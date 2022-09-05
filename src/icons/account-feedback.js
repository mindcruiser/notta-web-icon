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
        d="M2 6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H7.667a1 1 0 00-.6.2L5.2 20.6c-1.318.989-3.2.048-3.2-1.6V6zm3-1a1 1 0 00-1 1v13l1.867-1.4a3 3 0 011.8-.6H19a1 1 0 001-1V6a1 1 0 00-1-1H5zm7 1.5a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0 9a1 1 0 100-2 1 1 0 000 2z"
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
