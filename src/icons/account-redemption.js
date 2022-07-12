import React from 'react';
import PropTypes from 'prop-types';

const AccountRedemption = props => {
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
        d="M12.293 6.293a1 1 0 011.414 0l3.5 3.5A1 1 0 0116.5 11.5h-9a1 1 0 110-2h6.586l-1.793-1.793a1 1 0 010-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.707 17.707a1 1 0 01-1.414 0l-3.5-3.5A1 1 0 017.5 12.5h9a1 1 0 110 2H9.914l1.793 1.793a1 1 0 010 1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm4-2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6z"
      ></path>
    </svg>
  );
};

AccountRedemption.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountRedemption.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountRedemption;
