import React from 'react';
import PropTypes from 'prop-types';

const RecordsPauseDefault = props => {
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
        d="M7.75 5c-.69 0-1.25.56-1.25 1.25v11.5a1.25 1.25 0 102.5 0V6.25C9 5.56 8.44 5 7.75 5zm8.5 0C15.56 5 15 5.56 15 6.25v11.5a1.25 1.25 0 102.5 0V6.25c0-.69-.56-1.25-1.25-1.25z"
      ></path>
    </svg>
  );
};

RecordsPauseDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsPauseDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsPauseDefault;
