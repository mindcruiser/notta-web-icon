import React from 'react';
import PropTypes from 'prop-types';

const SideBarTrash = props => {
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
        d="M14.613 5l-.106-.316A1 1 0 0013.56 4h-3.117a1 1 0 00-.95.684L9.388 5h5.226zM7.977 7H18v12a1 1 0 01-1 1H7a1 1 0 01-1-1V7h1.977zm-.698-2l.316-.949A3 3 0 0110.441 2h3.117a3 3 0 012.846 2.051l.317.949H21a1 1 0 110 2h-1v12a3 3 0 01-3 3H7a3 3 0 01-3-3V7H3a1 1 0 110-2h4.28zM10 10a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm5 1a1 1 0 10-2 0v5a1 1 0 102 0v-5z"
      ></path>
    </svg>
  );
};

SideBarTrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarTrash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarTrash;
