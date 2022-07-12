import React from 'react';
import PropTypes from 'prop-types';

const PublicPage = props => {
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
        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8a1 1 0 011-1h6.5a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16a1 1 0 011-1h3.5a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

PublicPage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicPage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicPage;
