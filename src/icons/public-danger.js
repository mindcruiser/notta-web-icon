import React from 'react';
import PropTypes from 'prop-types';

const PublicDanger = props => {
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
        d="M7.757 14.829L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.829-2.829 1.414 1.415L13.414 12l2.829 2.829-1.414 1.414L12 13.414l-2.828 2.829-1.415-1.414zM12 21a9 9 0 100-18 9 9 0 000 18z"
      ></path>
    </svg>
  );
};

PublicDanger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicDanger.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicDanger;
