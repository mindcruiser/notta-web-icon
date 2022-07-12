import React from 'react';
import PropTypes from 'prop-types';

const RecordsStopOutlined = props => {
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
        d="M12 22.8c5.965 0 10.8-4.835 10.8-10.8 0-5.965-4.835-10.8-10.8-10.8C6.035 1.2 1.2 6.035 1.2 12c0 5.965 4.835 10.8 10.8 10.8zm0 1.2c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      ></path>
      <rect x="8.727" y="8.727" width="6.545" height="6.545" rx=".682"></rect>
    </svg>
  );
};

RecordsStopOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsStopOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsStopOutlined;
