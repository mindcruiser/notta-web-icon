import React from 'react';
import PropTypes from 'prop-types';

const RecordsForward = props => {
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
      <path d="M18.57 8.259a1 1 0 011.932-.518l1.45 5.41a1 1 0 01-.693 1.278l-5.465 1.465a1 1 0 11-.517-1.932l3.8-1.018c-3.083-2.843-5.993-3.598-8.503-3.317-2.892.323-5.466 2.043-7.343 4.055a1 1 0 01-1.462-1.364c2.072-2.222 5.057-4.284 8.582-4.679 2.784-.311 5.78.431 8.788 2.743l-.57-2.123z"></path>
    </svg>
  );
};

RecordsForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsForward;
