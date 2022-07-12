import React from 'react';
import PropTypes from 'prop-types';

const PublicInformationOutlined = props => {
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
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11.25-4.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13 11.002a1 1 0 10-2 0V17.5a1 1 0 102 0v-6.498z"
      ></path>
    </svg>
  );
};

PublicInformationOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicInformationOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicInformationOutlined;
