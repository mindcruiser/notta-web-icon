import React from 'react';
import PropTypes from 'prop-types';

const RecordsModifiedTime = props => {
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
        d="M17 3a1 1 0 10-2 0v1H9V3a1 1 0 00-2 0v1.002c-.475.003-.891.013-1.252.042-.562.046-1.079.145-1.564.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 8.29 2 8.954 2 9.758v6.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C6.29 22 6.954 22 7.758 22H11.5a1 1 0 100-2H7.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 01-.874-.874c-.08-.156-.145-.38-.18-.819C4 17.639 4 17.057 4 16.2V9.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874c.156-.08.38-.145.819-.18.294-.024.643-.033 1.089-.036V7a1 1 0 002 0V6h6v1a1 1 0 102 0v-.998c.445.003.795.012 1.089.036.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C20 8.361 20 8.943 20 9.8V11a1 1 0 102 0V9.759c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392-.361-.03-.776-.04-1.252-.042V3zM7 10a1 1 0 100 2h10a1 1 0 100-2H7zm-1 5a1 1 0 011-1h5a1 1 0 110 2H7a1 1 0 01-1-1zm16.707.293l-2-2a1 1 0 00-1.414 0l-5 5A1 1 0 0014 19v2a1 1 0 001 1h2a1 1 0 00.707-.293l5-5a1 1 0 000-1.414zM16 20v-.586l4-4 .586.586-4 4H16z"
      ></path>
    </svg>
  );
};

RecordsModifiedTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsModifiedTime.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsModifiedTime;
