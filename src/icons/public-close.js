import React from 'react';
import PropTypes from 'prop-types';

const PublicClose = props => {
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
      <g clipPath="url(#clip0_89_8)">
        <rect x=".01" y=".01" width="23.98" height="23.98"></rect>
        <path d="M0 0l24 24"></path>
        <path d="M24 0L0 24"></path>
        <path d="M12 0v24"></path>
        <path d="M24 12H0"></path>
        <path d="M24 8H0"></path>
        <path d="M24 16H0"></path>
        <path d="M12 24V0"></path>
        <path d="M16 24V0"></path>
        <path d="M8 24V0"></path>
        <rect x="4.01" y="2.01" width="15.98" height="19.98" rx=".99"></rect>
        <rect
          x="21.99"
          y="4.01"
          width="15.98"
          height="19.98"
          rx=".99"
          transform="rotate(90 21.99 4.01)"
        ></rect>
        <rect x="3.01" y="3.01" width="17.98" height="17.98" rx=".99"></rect>
        <circle cx="12" cy="12" r="9.99"></circle>
        <circle cx="12" cy="12" r="4.99"></circle>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293z"
      ></path>
      <defs>
        <clipPath id="clip0_89_8">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PublicClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicClose.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicClose;
