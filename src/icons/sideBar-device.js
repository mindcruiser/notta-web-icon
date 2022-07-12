import React from 'react';
import PropTypes from 'prop-types';

const SideBarDevice = props => {
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
        d="M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H6zM5 5a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5zm3 3a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 100 2h2a1 1 0 100-2H9zm5 0a1 1 0 100 2h1a1 1 0 100-2h-1zm-5 4a1 1 0 100 2h1a1 1 0 100-2H9zm3 1a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

SideBarDevice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarDevice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarDevice;
