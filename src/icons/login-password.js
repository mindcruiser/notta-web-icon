import React from 'react';
import PropTypes from 'prop-types';

const LoginPassword = props => {
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
        d="M12 3.25A3.941 3.941 0 008.06 7.191v3.003h7.883V7.191A3.941 3.941 0 0012 3.25zm5.442 6.944V7.191a5.441 5.441 0 00-10.883 0v3.003H4.494c-.948 0-1.688.782-1.688 1.71v8.636c0 .929.74 1.71 1.688 1.71h15.012c.948 0 1.688-.781 1.688-1.71v-8.636c0-.928-.74-1.71-1.688-1.71h-2.064zm-12.948 1.5c-.088 0-.188.078-.188.21v8.636c0 .132.1.21.188.21h15.012c.088 0 .188-.078.188-.21v-8.636c0-.132-.1-.21-.188-.21H4.494zM12 14.417a.75.75 0 01.75.75v2.11a.75.75 0 01-1.5 0v-2.11a.75.75 0 01.75-.75z"
      ></path>
    </svg>
  );
};

LoginPassword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginPassword.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoginPassword;
