import React from 'react';
import PropTypes from 'prop-types';

const RecordsUploadOutlined = props => {
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
      <path d="M12 2C8.389 2 5.424 4.746 5.042 8.265A6.03 6.03 0 001 13.966c0 3.325 2.68 6.03 6 6.03a1 1 0 100-2c-2.203 0-4-1.798-4-4.03a4.025 4.025 0 013.2-3.95 1 1 0 00.8-.98C7 6.25 9.244 4 12 4s5 2.25 5 5.037a1 1 0 00.8.98 4.025 4.025 0 013.2 3.95c0 2.231-1.797 4.03-4 4.03a1 1 0 100 2c3.32 0 6-2.706 6-6.03a6.03 6.03 0 00-4.042-5.702C18.576 4.746 15.612 2 12 2z"></path>
      <path d="M11.242 11.926a1 1 0 011.413-.004l3.566 3.538a1 1 0 11-1.409 1.42L13 15.082V21a1 1 0 11-2 0v-5.998l-1.808 1.815a1 1 0 01-1.417-1.412l3.467-3.48z"></path>
    </svg>
  );
};

RecordsUploadOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsUploadOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsUploadOutlined;
