import React from 'react';
import PropTypes from 'prop-types';

const RecordsAudioFilesOutlined = props => {
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
        d="M11.612 9.336a1 1 0 01.83-.208l2.5.5a1 1 0 01-.392 1.961l-1.304-.26v4.283a2.75 2.75 0 01-2.75 2.747h-1a2.75 2.75 0 110-5.5h1c.26 0 .512.036.75.103V10.11a1 1 0 01.366-.773zm-1.116 5.523a.75.75 0 010 1.5h-1a.75.75 0 010-1.5h1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a3 3 0 013-3h9.172a3 3 0 012.12.879l2.83 2.828A3 3 0 0121 7.828V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V9h-1a3 3 0 01-3-3V4H6zm11 1.414L18.586 7H18a1 1 0 01-1-1v-.586z"
      ></path>
    </svg>
  );
};

RecordsAudioFilesOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsAudioFilesOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsAudioFilesOutlined;
