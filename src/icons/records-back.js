import React from 'react';
import PropTypes from 'prop-types';

const RecordsBack = props => {
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
      <path d="M5.43 8.259a1 1 0 00-1.932-.518l-1.45 5.41a1 1 0 00.693 1.278l5.464 1.465a1 1 0 10.518-1.932l-3.8-1.018c3.082-2.843 5.992-3.598 8.503-3.317 2.891.323 5.466 2.043 7.343 4.055a1 1 0 101.462-1.364c-2.073-2.222-5.057-4.284-8.583-4.679-2.784-.311-5.78.431-8.787 2.743L5.43 8.26z"></path>
    </svg>
  );
};

RecordsBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsBack;
