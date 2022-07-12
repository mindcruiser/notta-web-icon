import React from 'react';
import PropTypes from 'prop-types';

const PublicCommand = props => {
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
        d="M2 5.455a3.455 3.455 0 116.91 0v1.454h6.18V5.455a3.455 3.455 0 113.455 3.454h-1.454v6.182h1.454a3.455 3.455 0 11-3.454 3.454v-1.454H8.909v1.454a3.455 3.455 0 11-3.454-3.454h1.454V8.909H5.455A3.455 3.455 0 012 5.455zM5.455 4a1.455 1.455 0 100 2.91h1.454V5.454C6.91 4.65 6.258 4 5.455 4zm0 13.09a1.455 1.455 0 101.454 1.455v-1.454H5.455zm3.454-1.999V8.909h6.182v6.182H8.909zM18.545 4c-.803 0-1.454.651-1.454 1.455v1.454h1.454a1.455 1.455 0 000-2.909zm-1.454 14.545v-1.454h1.454a1.455 1.455 0 11-1.454 1.454z"
      ></path>
    </svg>
  );
};

PublicCommand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCommand.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCommand;
