import React from 'react';
import PropTypes from 'prop-types';

const RecordsBackward5s = props => {
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
        d="M12.47 1.415a.75.75 0 01.115 1.054l-.804 1.004a9.64 9.64 0 019.86 9.637 9.64 9.64 0 01-9.641 9.64 9.64 9.64 0 01-9.64-9.64c0-2.176.751-4.162 1.95-5.76a.75.75 0 111.2.9c-1.022 1.362-1.65 3.037-1.65 4.86A8.14 8.14 0 0012 21.25a8.14 8.14 0 008.14-8.14A8.14 8.14 0 0012 4.97c-.575 0-1.14.071-1.697.195a.75.75 0 01-1.033-.677.75.75 0 01.231-.57l1.914-2.387a.75.75 0 011.054-.116zm2.382 13.438c0 1.362-1.18 2.267-2.922 2.267-1.43 0-2.309-.619-2.662-1.357a1.127 1.127 0 01-.12-.494c0-.406.26-.66.692-.66.312 0 .51.124.665.41.265.525.67.837 1.45.837.77 0 1.3-.447 1.3-1.07.006-.729-.53-1.134-1.44-1.134h-.327c-.38 0-.598-.224-.598-.562 0-.328.218-.556.598-.556h.307c.785 0 1.294-.427 1.294-1.04 0-.603-.405-1.004-1.164-1.004-.635 0-1.02.265-1.264.796-.171.353-.354.483-.707.483-.437 0-.66-.254-.66-.634 0-.177.036-.328.114-.504.333-.733 1.186-1.347 2.511-1.347 1.586 0 2.657.785 2.657 1.986 0 .952-.68 1.576-1.565 1.758v.03c1.118.105 1.841.76 1.841 1.795z"
      ></path>
    </svg>
  );
};

RecordsBackward5s.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsBackward5s.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsBackward5s;
