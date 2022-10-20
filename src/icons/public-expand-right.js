import React from 'react';
import PropTypes from 'prop-types';

const PublicExpandRight = props => {
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
      <path d="M8.043 13.543a1 1 0 101.414 1.414l2.25-2.25a1 1 0 000-1.414l-2.25-2.25a1 1 0 00-1.414 1.414L9.586 12l-1.543 1.543z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 22a4 4 0 01-4-4V6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6zM6 4h9v16H6a2 2 0 01-2-2V6a2 2 0 012-2zm11 0v16h1a2 2 0 002-2V6a2 2 0 00-2-2h-1z"
      ></path>
    </svg>
  );
};

PublicExpandRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicExpandRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicExpandRight;
