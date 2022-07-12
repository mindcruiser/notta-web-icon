import React from 'react';
import PropTypes from 'prop-types';

const PublicChromeFilled = props => {
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
      <path d="M10.044 20.787C6.015 19.894 3 16.299 3 12c0-1.64.438-3.177 1.205-4.502l3.855 6.677a4.499 4.499 0 004.478 2.293l-2.494 4.319zM12 21l3.858-6.682c.421-.7.643-1.501.642-2.318a4.48 4.48 0 00-.9-2.7h4.988A9 9 0 0112 21zm2.315-7.61a2.699 2.699 0 01-4.653-.04l-.026-.045a2.7 2.7 0 114.702.045l-.023.04zM5.369 5.915A8.977 8.977 0 0112 3a8.997 8.997 0 017.796 4.5H12a4.501 4.501 0 00-4.14 2.732L5.37 5.915z"></path>
    </svg>
  );
};

PublicChromeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicChromeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicChromeFilled;
