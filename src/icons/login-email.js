import React from 'react';
import PropTypes from 'prop-types';

const LoginEmail = props => {
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
        d="M4 4.25A1.75 1.75 0 002.25 6v12c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0021.75 18V6A1.75 1.75 0 0020 4.25H4zm-.25 2.044V18c0 .138.112.25.25.25h16a.25.25 0 00.25-.25V6.294l-7.737 7.253a.75.75 0 01-1.026 0L3.75 6.294zm14.887-.544H5.363L12 11.972l6.637-6.222z"
      ></path>
    </svg>
  );
};

LoginEmail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginEmail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoginEmail;
