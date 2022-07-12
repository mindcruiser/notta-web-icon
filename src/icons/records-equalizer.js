import React from 'react';
import PropTypes from 'prop-types';

const RecordsEqualizer = props => {
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
        d="M10 4.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3 8h3.385a3.752 3.752 0 007.365-1 3.75 3.75 0 00-7.365-1H3a1 1 0 000 2zm12.5-2a1 1 0 100 2H21a1 1 0 100-2h-5.5zM2 17a1 1 0 011-1h5.5a1 1 0 110 2H3a1 1 0 01-1-1zm15.615 1H21a1 1 0 100-2h-3.385a3.752 3.752 0 00-7.365 1 3.75 3.75 0 007.365 1zm-5.865-1a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
      ></path>
    </svg>
  );
};

RecordsEqualizer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsEqualizer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsEqualizer;
