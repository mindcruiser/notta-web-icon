import React from 'react';
import PropTypes from 'prop-types';

const RecordsYoutubeRecording = props => {
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
        d="M12 4c-3.03 0-5.39.178-7.077.377C2.555 4.657 1 6.697 1 8.961v6.079c0 2.263 1.555 4.304 3.923 4.583C6.611 19.822 8.97 20 12 20c3.03 0 5.39-.178 7.077-.377 2.368-.28 3.923-2.32 3.923-4.584V8.962c0-2.264-1.555-4.305-3.923-4.584C17.389 4.178 15.03 4 12 4zM5.157 6.363C6.767 6.173 9.048 6 12 6s5.233.174 6.843.363C20.086 6.51 21 7.588 21 8.961v6.079c0 1.372-.914 2.45-2.157 2.597-1.61.19-3.891.363-6.843.363s-5.233-.174-6.843-.363C3.914 17.49 3 16.412 3 15.039V8.962c0-1.373.914-2.451 2.157-2.598z"
      ></path>
    </svg>
  );
};

RecordsYoutubeRecording.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsYoutubeRecording.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsYoutubeRecording;
