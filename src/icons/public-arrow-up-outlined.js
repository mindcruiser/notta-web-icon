import React from 'react';
import PropTypes from 'prop-types';

const PublicArrowUpOutlined = props => {
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
        d="M5.892 15.663a.9.9 0 001.272-.055L12 10.332l4.837 5.276a.9.9 0 101.326-1.216l-5.5-6a.9.9 0 00-1.326 0l-5.5 6a.9.9 0 00.055 1.271z"
      ></path>
    </svg>
  );
};

PublicArrowUpOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicArrowUpOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicArrowUpOutlined;
