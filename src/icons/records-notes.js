import React from 'react';
import PropTypes from 'prop-types';

const RecordsNotes = props => {
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
        d="M7 8a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a4 4 0 014-4h10a4 4 0 014 4v14c0 1.648-1.881 2.589-3.2 1.6l-.6-.45a2 2 0 00-2.4 0l-.255.19a4 4 0 01-5.034-.189l-.194-.17a2 2 0 00-2.634 0l-.366.32C5.024 22.433 3 21.515 3 19.796V6zm4-2a2 2 0 00-2 2v13.796l.366-.32a4 4 0 015.268 0l.194.17a2 2 0 002.517.095l.255-.191a4 4 0 014.8 0l.6.45V6a2 2 0 00-2-2H7z"
      ></path>
    </svg>
  );
};

RecordsNotes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsNotes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsNotes;
