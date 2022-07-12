import React from 'react';
import PropTypes from 'prop-types';

const RecordsImageAdd = props => {
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
        d="M22 7.759V13a1 1 0 11-2 0V7.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 4 17.057 4 16.2 4H7.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C4 6.361 4 6.943 4 7.8v8.4c0 .857 0 1.439.038 1.889.034.42.095.644.17.8.026-.034.054-.066.085-.096l8.5-8.5a1 1 0 011.347-.061l3 2.5a1 1 0 11-1.28 1.536l-2.299-1.915-7.612 7.612C6.394 20 6.967 20 7.8 20H14a1 1 0 110 2H7.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 17.71 2 17.046 2 16.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 2 6.954 2 7.758 2h8.483c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C22 6.29 22 6.954 22 7.758zM15 18.5a1 1 0 011-1h1.5V16a1 1 0 112 0v1.5H21a1 1 0 110 2h-1.5V21a1 1 0 11-2 0v-1.5H16a1 1 0 01-1-1zm-5-10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      ></path>
    </svg>
  );
};

RecordsImageAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsImageAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsImageAdd;
