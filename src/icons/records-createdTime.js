import React from 'react';
import PropTypes from 'prop-types';

const RecordsCreatedTime = props => {
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
        d="M16 2a1 1 0 011 1v1.002c.476.003.891.013 1.252.042.562.046 1.079.145 1.564.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C22 8.29 22 8.954 22 9.758V13a1 1 0 11-2 0V9.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18A15.16 15.16 0 0017 6.002V7a1 1 0 11-2 0V6H9v1a1 1 0 01-2 0v-.998c-.446.003-.795.012-1.089.036-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C4 8.361 4 8.943 4 9.8v6.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C6.361 20 6.943 20 7.8 20H14a1 1 0 110 2H7.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 17.71 2 17.046 2 16.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392.361-.03.777-.04 1.252-.042V3a1 1 0 012 0v1h6V3a1 1 0 011-1zM6 11a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h5a1 1 0 100-2H7zm12.525 1a1 1 0 011 1v1.475H22a1 1 0 110 2h-1.475V21a1 1 0 11-2 0v-1.525H17a1 1 0 010-2h1.525V16a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

RecordsCreatedTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsCreatedTime.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsCreatedTime;
