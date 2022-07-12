import React from 'react';
import PropTypes from 'prop-types';

const AccountPersonal = props => {
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
        d="M12 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM9.5 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM7 13a5 5 0 00-5 5v3a1 1 0 001 1h18a1 1 0 001-1v-3a5 5 0 00-5-5H7zm-3 5a3 3 0 013-3h10a3 3 0 013 3v2H4v-2z"
      ></path>
    </svg>
  );
};

AccountPersonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountPersonal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountPersonal;
