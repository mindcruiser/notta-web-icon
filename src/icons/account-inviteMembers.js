import React from 'react';
import PropTypes from 'prop-types';

const AccountInviteMembers = props => {
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
        d="M5 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM9.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm8.5 9.5a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1zM6 13a4 4 0 00-4 4v4a1 1 0 001 1h11a1 1 0 100-2H4v-3a2 2 0 012-2h8a1 1 0 100-2H6z"
      ></path>
    </svg>
  );
};

AccountInviteMembers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountInviteMembers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountInviteMembers;
