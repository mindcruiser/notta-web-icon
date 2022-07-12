import React from 'react';
import PropTypes from 'prop-types';

const PublicInformationFilled = props => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.25-14.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 10.002a1 1 0 011 1V17.5a1 1 0 11-2 0v-6.498a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

PublicInformationFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicInformationFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicInformationFilled;
