import React from 'react';
import PropTypes from 'prop-types';

const PublicCloseOne = props => {
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
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm3.359 4.891a.75.75 0 010 1.061L13.06 12l2.298 2.298a.75.75 0 11-1.06 1.06L12 13.062l-2.298 2.298a.75.75 0 01-1.06-1.06L10.938 12 8.641 9.702a.75.75 0 011.061-1.06L12 10.938l2.298-2.298a.75.75 0 011.06 0z"
      ></path>
    </svg>
  );
};

PublicCloseOne.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCloseOne.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCloseOne;
