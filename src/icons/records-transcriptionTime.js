import React from 'react';
import PropTypes from 'prop-types';

const RecordsTranscriptionTime = props => {
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
      <path d="M12.5 8a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L12.5 11.586V8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z"
      ></path>
    </svg>
  );
};

RecordsTranscriptionTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsTranscriptionTime.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsTranscriptionTime;
