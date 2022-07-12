import React from 'react';
import PropTypes from 'prop-types';

const SideBarDashboard = props => {
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
        d="M12.49 4.423a1 1 0 00-.98 0l-6 3.375A1 1 0 005 8.67V19a1 1 0 001 1h1.893a.44.44 0 00.44-.44v-3.093a3.667 3.667 0 117.334 0v3.093c0 .243.197.44.44.44H18a1 1 0 001-1V8.67a1 1 0 00-.51-.872l-6-3.375zM10.53 2.68a3 3 0 012.94 0l6 3.375A3 3 0 0121 8.67V19a3 3 0 01-3 3h-1.893a2.44 2.44 0 01-2.44-2.44v-3.093a1.667 1.667 0 00-3.334 0v3.093A2.44 2.44 0 017.893 22H6a3 3 0 01-3-3V8.67a3 3 0 011.53-2.615l6-3.375z"
      ></path>
    </svg>
  );
};

SideBarDashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarDashboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarDashboard;
