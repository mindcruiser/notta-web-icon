import React from 'react';
import PropTypes from 'prop-types';

const RecordsPlayOutlined = props => {
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
        d="M22.8 12c0 5.965-4.835 10.8-10.8 10.8-5.965 0-10.8-4.835-10.8-10.8C1.2 6.035 6.035 1.2 12 1.2c5.965 0 10.8 4.835 10.8 10.8zm1.2 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.47.56c.398-.267.398-.853 0-1.119l-4.667-3.109a.672.672 0 00-1.045.56v6.217c0 .536.598.857 1.045.56l4.666-3.11z"
      ></path>
    </svg>
  );
};

RecordsPlayOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsPlayOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsPlayOutlined;
