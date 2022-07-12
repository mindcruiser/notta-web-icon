import React from 'react';
import PropTypes from 'prop-types';

const AccountBilling = props => {
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
        d="M6 3a4 4 0 00-4 4v10a4 4 0 004 4h12a4 4 0 004-4V7a4 4 0 00-4-4H6zm14 6V7a2 2 0 00-2-2H6a2 2 0 00-2 2v2h16zM4 11h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm1 4a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zm6-1a1 1 0 100 2h5a1 1 0 100-2h-5z"
      ></path>
    </svg>
  );
};

AccountBilling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountBilling.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountBilling;
