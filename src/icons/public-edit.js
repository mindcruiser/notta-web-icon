import React from 'react';
import PropTypes from 'prop-types';

const PublicEdit = props => {
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
        d="M16.555 2.293a1 1 0 00-1.415 0L4.792 12.653a1 1 0 00-.292.707V17a1 1 0 001 1h3.659a1 1 0 00.707-.293L20.207 7.361a1 1 0 000-1.414l-3.652-3.654zM6.5 13.773l9.348-9.358 2.238 2.239L8.744 16H6.5v-2.226zM3.5 20a1 1 0 100 2h18a1 1 0 100-2h-18z"
      ></path>
    </svg>
  );
};

PublicEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicEdit;
