import React from 'react';
import PropTypes from 'prop-types';

const AccountSecurity = props => {
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
        d="M12.375 1.575a1 1 0 00-.75 0L3.621 4.811a1 1 0 00-.625.928v6.903c0 2.881.9 4.86 2.53 6.368 1.553 1.437 3.725 2.395 6.08 3.407a1 1 0 00.788 0c2.417-1.035 4.648-2.01 6.211-3.834 1.605-1.871 2.399-4.484 2.399-8.54V5.74a1 1 0 00-.625-.928l-8.004-3.236zM4.996 12.642v-6.23L12 3.583l7.004 2.83v3.631c0 3.814-.749 5.875-1.917 7.238-1.144 1.335-2.793 2.138-5.086 3.128-2.233-.965-3.932-1.77-5.117-2.867-1.175-1.088-1.888-2.51-1.888-4.9zM16.08 9.967a1 1 0 10-1.518-1.301l-3.377 3.94-1.276-1.277a1 1 0 00-1.415 1.414l2.04 2.04a1 1 0 001.467-.056l4.08-4.76z"
      ></path>
    </svg>
  );
};

AccountSecurity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountSecurity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountSecurity;
