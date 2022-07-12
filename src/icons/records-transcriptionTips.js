import React from 'react';
import PropTypes from 'prop-types';

const RecordsTranscriptionTips = props => {
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
        d="M13.5 3.16c-4.265-.92-8 2.26-8 6.282 0 2.288 1.545 4.545 3.497 5.713a1 1 0 01.486.858V17h5.063v-.996a1 1 0 01.487-.858c2.738-1.638 4.49-5.309 2.795-8.682-.837-1.666-2.46-2.894-4.329-3.304zm-10 6.282c0-5.3 4.915-9.425 10.423-8.237l.003.001c2.428.532 4.568 2.128 5.69 4.36 2.168 4.316.07 8.805-3.07 10.982V17.123a4.588 4.588 0 01-.001.292c-.01.172-.047.433-.189.701-.34.646-1.009.884-1.722.884H9.4c-.535.004-1.306-.069-1.71-.742a1.576 1.576 0 01-.21-.765 3.677 3.677 0 010-.232v-.035l.003-.12v-.548C5.28 15.036 3.5 12.364 3.5 9.442zm9.003-3.419a1 1 0 01.368 1.365l-.64 1.112h.403c.454 0 1.037.169 1.354.727.315.552.168 1.134-.057 1.522l-1.058 1.856a1 1 0 11-1.738-.99l.636-1.115h-.407c-.456 0-1.03-.174-1.347-.721-.317-.548-.18-1.133.052-1.53l1.068-1.858a1 1 0 011.366-.368zM8.78 21.973a11.5 11.5 0 016.44 0 1 1 0 10.56-1.92 13.5 13.5 0 00-7.56 0 1 1 0 00.56 1.92z"
      ></path>
    </svg>
  );
};

RecordsTranscriptionTips.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsTranscriptionTips.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsTranscriptionTips;
