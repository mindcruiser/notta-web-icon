import React from 'react';
import PropTypes from 'prop-types';

const RecordsZoomRecording = props => {
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
        d="M3 5a3 3 0 00-3 3v6a5 5 0 005 5h7a3 3 0 003-3v-6a5 5 0 00-5-5H3zM2 8a1 1 0 011-1h7a3 3 0 013 3v6a1 1 0 01-1 1H5a3 3 0 01-3-3V8z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.419 5.186A1 1 0 0124 6v12a1 1 0 01-1.496.868l-6-3.428A1 1 0 0116 14.57v-4.285a1 1 0 01.419-.814l6-4.286zM22 16.276V7.944L18 10.8v3.191l4 2.286z"
      ></path>
    </svg>
  );
};

RecordsZoomRecording.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsZoomRecording.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsZoomRecording;
