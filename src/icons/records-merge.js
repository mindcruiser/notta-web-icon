import React from 'react';
import PropTypes from 'prop-types';

const RecordsMerge = props => {
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
        d="M2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm9-1v1.828l-.414-.414a1 1 0 00-1.414 1.414l2.12 2.122a1 1 0 001.415 0l2.121-2.122a1 1 0 10-1.414-1.414L13 5.828V4h6a1 1 0 011 1v6h-2v2h2v6a1 1 0 01-1 1h-6v-1.827l.414.414a1 1 0 001.414-1.414l-2.12-2.121a1 1 0 00-1.415 0l-2.121 2.12a1 1 0 101.414 1.415l.414-.414V20H5a1 1 0 01-1-1v-6h2v-2H4V5a1 1 0 011-1h6zm-2.333 7v2h2v-2h-2zm4.666 2v-2h2v2h-2z"
      ></path>
    </svg>
  );
};

RecordsMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsMerge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsMerge;
