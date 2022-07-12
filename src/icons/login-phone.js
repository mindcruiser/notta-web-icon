import React from 'react';
import PropTypes from 'prop-types';

const LoginPhone = props => {
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
        d="M7 3.75a.25.25 0 00-.25.25v17c0 .138.112.25.25.25h10a.25.25 0 00.25-.25V4a.25.25 0 00-.25-.25H7zM5.25 4c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v17A1.75 1.75 0 0117 22.75H7A1.75 1.75 0 015.25 21V4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.47 17.47a.75.75 0 011.06 0l.016.016a.75.75 0 11-1.06 1.06l-.016-.016a.75.75 0 010-1.06z"
      ></path>
    </svg>
  );
};

LoginPhone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginPhone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoginPhone;
