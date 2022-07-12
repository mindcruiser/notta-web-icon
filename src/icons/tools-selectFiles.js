import React from 'react';
import PropTypes from 'prop-types';

const ToolsSelectFiles = props => {
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
        d="M5 1a2 2 0 00-2 2v18a2 2 0 002 2h6a1 1 0 000-2H5V3h9v4a1 1 0 001 1h4v3.5a1 1 0 102 0V7.017 7a.997.997 0 00-.267-.68l-4.49-4.989A1 1 0 0015.5 1H5zm11 3.05V6h1.755L16 4.05z"
      ></path>
      <path d="M17.5 14.5a1 1 0 10-2 0V17H13a1 1 0 100 2h2.5v2.5a1 1 0 102 0V19H20a1 1 0 000-2h-2.5v-2.5z"></path>
    </svg>
  );
};

ToolsSelectFiles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ToolsSelectFiles.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ToolsSelectFiles;
