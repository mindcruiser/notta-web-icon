import React from 'react';
import PropTypes from 'prop-types';

const RecordsVideoFiles = props => {
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
      <path d="M9 9.047v6.111a1 1 0 001.545.84l4.277-2.779a1 1 0 00.07-1.627l-4.277-3.334A1 1 0 009 9.047z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 2a3 3 0 00-3 3v14a3 3 0 003 3h11a3 3 0 003-3V8.186a3 3 0 00-.632-1.842L17.39 3.158A3 3 0 0015.022 2H6.5zm-1 3a1 1 0 011-1h8.522a1 1 0 01.79.386l2.477 3.186a1 1 0 01.211.614V19a1 1 0 01-1 1h-11a1 1 0 01-1-1V5z"
      ></path>
    </svg>
  );
};

RecordsVideoFiles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsVideoFiles.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsVideoFiles;
