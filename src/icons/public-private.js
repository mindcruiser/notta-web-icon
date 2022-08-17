import React from 'react';
import PropTypes from 'prop-types';

const PublicPrivate = props => {
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
        d="M12 4a3.5 3.5 0 013.5 3.5V9h-7V7.5A3.5 3.5 0 0112 4zM6.5 9.031V7.5a5.5 5.5 0 1111 0v1.531A4 4 0 0121 13v5a4 4 0 01-4 4H7a4 4 0 01-4-4v-5a4 4 0 013.5-3.969zM16.5 11h.5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h9.5zM12 13a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

PublicPrivate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicPrivate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicPrivate;
