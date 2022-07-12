import React from 'react';
import PropTypes from 'prop-types';

const RecordsMarkerPoints = props => {
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
      <path d="M6 3.5A1.5 1.5 0 017.5 2h9A1.5 1.5 0 0118 3.5v13.43a2 2 0 01-.89 1.664l-4.278 2.851a1.5 1.5 0 01-1.664 0L6.89 18.594A2 2 0 016 16.93V3.5z"></path>
    </svg>
  );
};

RecordsMarkerPoints.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsMarkerPoints.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsMarkerPoints;
