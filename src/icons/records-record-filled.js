import React from 'react';
import PropTypes from 'prop-types';

const RecordsRecordFilled = props => {
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
        d="M7.5 6.5a4.5 4.5 0 019 0v7a4.5 4.5 0 11-9 0v-7zm4.875 2.39c0 .111.09.2.2.2h2.08a.2.2 0 01.174.3L12 14.346c-.102.178-.374.106-.374-.1V11.11a.2.2 0 00-.2-.2h-2.08a.2.2 0 01-.174-.3L12 5.655c.102-.178.374-.106.374.1V8.89zm-7.544 7.665a1 1 0 00-1.791.89A10 10 0 0012 23a10 10 0 008.96-5.555 1 1 0 10-1.791-.89A8 8 0 0112 21a8 8 0 01-7.169-4.445z"
      ></path>
    </svg>
  );
};

RecordsRecordFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsRecordFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsRecordFilled;
