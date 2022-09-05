import React from 'react';
import PropTypes from 'prop-types';

const PublicBothArrowRightOutlined = props => {
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
        d="M4.292 16.836a.9.9 0 001.216 1.327l6-5.5a.9.9 0 000-1.327l-6-5.5a.9.9 0 00-1.216 1.327L9.568 12l-5.276 4.836zm8.2 0a.9.9 0 001.216 1.327l6-5.5a.9.9 0 000-1.327l-6-5.5a.9.9 0 10-1.216 1.327L17.768 12l-5.276 4.836z"
      ></path>
    </svg>
  );
};

PublicBothArrowRightOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicBothArrowRightOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicBothArrowRightOutlined;
