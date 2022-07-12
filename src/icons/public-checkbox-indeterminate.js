import React from 'react';
import PropTypes from 'prop-types';

const PublicCheckboxIndeterminate = props => {
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
        d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm2 8a1 1 0 100 2h8a1 1 0 100-2H8z"
      ></path>
    </svg>
  );
};

PublicCheckboxIndeterminate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCheckboxIndeterminate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCheckboxIndeterminate;
