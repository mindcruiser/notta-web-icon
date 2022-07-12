import React from 'react';
import PropTypes from 'prop-types';

const AccountSignOut = props => {
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
        d="M2 3a1 1 0 011-1h8.996a1 1 0 110 2H4v16h8a1 1 0 110 2H3a1 1 0 01-1-1V3zm13.793 3.793a1 1 0 011.414 0l4.444 4.443c.213.184.349.456.349.76v.002a.997.997 0 01-.293.71l-4.5 4.5a1 1 0 01-1.414-1.415l2.797-2.797H8a1 1 0 110-2h10.582l-2.79-2.789a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

AccountSignOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountSignOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountSignOut;
