import React from 'react';
import PropTypes from 'prop-types';

const AccountIntegrations = props => {
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
        d="M9 6a2 2 0 113.886.667 1 1 0 001.03 1.33c.027.002.056.003.084.003h2a1 1 0 011 1v2l.003.084a1 1 0 001.33 1.03 2 2 0 110 3.773 1 1 0 00-1.33 1.029A1.018 1.018 0 0017 17v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-1a4 4 0 000-8V9a1 1 0 011-1h2l.084-.003a1 1 0 001.03-1.33A1.995 1.995 0 019 6zm-5.997 5.084A1.009 1.009 0 013 11V9a3 3 0 013-3h1a4 4 0 118 0h1a3 3 0 013 3v1a4 4 0 010 8v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-2l.003-.084a1 1 0 011.33-1.03 2 2 0 100-3.773 1 1 0 01-1.33-1.029z"
      ></path>
    </svg>
  );
};

AccountIntegrations.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountIntegrations.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountIntegrations;
