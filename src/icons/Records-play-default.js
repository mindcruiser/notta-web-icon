import React from 'react';
import PropTypes from 'prop-types';

const RecordsPlayDefault = props => {
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
      <path d="M17.752 11.168a1 1 0 010 1.664l-9.197 6.131A1 1 0 017 18.131V5.87a1 1 0 011.555-.833l9.197 6.132z"></path>
    </svg>
  );
};

RecordsPlayDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsPlayDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsPlayDefault;
