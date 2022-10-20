import React from 'react';
import PropTypes from 'prop-types';

const PublicSearchAndReplace = props => {
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
        d="M11 4a7 7 0 00-6.492 9.625H2.39a9 9 0 0114.236-9.65C17.688 4.825 18.46 5.567 19.33 7H13c.521-1.191.605-1.362.765-1.685.07-.141.154-.312.296-.612A6.97 6.97 0 0011 4zm7 7c0-.93-.18-1.816-.509-2.625h2.12a9 9 0 01-11.986 10.97C5.446 18.464 3.699 16.813 2.67 15H9c-.5 1.5-.5 1.5-.9 2.373A6.95 6.95 0 0011 18a7 7 0 007-7zm1.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414-1.414l-2-2z"
      ></path>
    </svg>
  );
};

PublicSearchAndReplace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicSearchAndReplace.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicSearchAndReplace;
