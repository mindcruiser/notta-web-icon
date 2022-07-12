import React from 'react';
import PropTypes from 'prop-types';

const SideBarFolders = props => {
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
        d="M4 6a1 1 0 011-1h5.172a1 1 0 01.707.293l.828.828A3 3 0 0013.828 7H19a1 1 0 011 1v2H4V6zm0 6v7a1 1 0 001 1h14a1 1 0 001-1v-7H4zm1-9a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3h-5.172a1 1 0 01-.707-.293l-.828-.828A3 3 0 0010.172 3H5z"
      ></path>
    </svg>
  );
};

SideBarFolders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarFolders.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarFolders;
