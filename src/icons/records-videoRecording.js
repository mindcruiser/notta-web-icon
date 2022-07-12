import React from 'react';
import PropTypes from 'prop-types';

const RecordsVideoRecording = props => {
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
      <path d="M10 9.964v4.26a1 1 0 001.518.856l3.196-1.937a1 1 0 00.07-1.664l-3.196-2.324A1 1 0 0010 9.964z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
      ></path>
    </svg>
  );
};

RecordsVideoRecording.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsVideoRecording.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsVideoRecording;
