import React from 'react';
import PropTypes from 'prop-types';

const PublicLink = props => {
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
      <path d="M8 8a4 4 0 100 8h1a1 1 0 110 2H8A6 6 0 018 6h1a1 1 0 010 2H8z"></path>
      <path d="M16 8a4 4 0 010 8h-1a1 1 0 100 2h1a6 6 0 000-12h-1a1 1 0 100 2h1z"></path>
      <path d="M8 11a1 1 0 100 2h8a1 1 0 100-2H8z"></path>
    </svg>
  );
};

PublicLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicLink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicLink;
