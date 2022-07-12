import React from 'react';
import PropTypes from 'prop-types';

const RecordsMark = props => {
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
        d="M7 2a3 3 0 00-3 3v15.382a1 1 0 001.447.894l6.106-3.052a1 1 0 01.894 0l6.106 3.052A1 1 0 0020 20.382V5a3 3 0 00-3-3H7zm2.75 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
      ></path>
    </svg>
  );
};

RecordsMark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsMark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsMark;
