import React from 'react';
import PropTypes from 'prop-types';

const PublicAsterisk = props => {
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
        d="M11 4a1 1 0 112 0v6.268l5.428-3.134a1 1 0 111 1.732L14 12l5.428 3.134a1 1 0 01-1 1.732L13 13.732V20a1 1 0 11-2 0v-6.268l-5.428 3.134a1 1 0 11-1-1.732L10 12 4.572 8.866a1 1 0 111-1.732L11 10.268V4z"
      ></path>
    </svg>
  );
};

PublicAsterisk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicAsterisk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicAsterisk;
