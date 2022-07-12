import React from 'react';
import PropTypes from 'prop-types';

const RecordsExtensionsOutlined = props => {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm2.217-1.86a8.001 8.001 0 004.424 9.123l2.467-2.291a5.045 5.045 0 01-2.971-1.72 1.005 1.005 0 01-.139-.148l-3.78-4.964zm.867-2.164l2.045 2.686A5.052 5.052 0 0112 6.95h6.205A7.985 7.985 0 0012 4a7.997 7.997 0 00-6.916 3.976zm14.314.974h-3.373A5.028 5.028 0 0117.05 12a5.04 5.04 0 01-1.896 3.944l-4.283 3.977A8 8 0 0019.398 8.95zm-5.425 5.376a3.05 3.05 0 10-.119.096l.005-.005c.037-.034.075-.064.114-.091z"
      ></path>
    </svg>
  );
};

RecordsExtensionsOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsExtensionsOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsExtensionsOutlined;
