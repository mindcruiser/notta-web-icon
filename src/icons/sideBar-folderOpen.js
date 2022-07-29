import React from 'react';
import PropTypes from 'prop-types';

const SideBarFolderOpen = props => {
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
        d="M5 4a2 2 0 00-2 2v5.75l.257-1.177A2 2 0 015.211 9H19v-.882a2 2 0 00-2-2h-4.4a4 4 0 01-2.586-.948l-1.1-.933A1 1 0 008.266 4H5zm16 5.01v-.892a4 4 0 00-4-4h-4.4a2 2 0 01-1.293-.474l-1.101-.933A3 3 0 008.266 2H5a4 4 0 00-4 4v12c0 .965.341 1.85.91 2.54A2.992 2.992 0 004.485 22h14.68a2 2 0 001.968-1.642l1.637-9A2 2 0 0021 9.01z"
      ></path>
    </svg>
  );
};

SideBarFolderOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarFolderOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarFolderOpen;
