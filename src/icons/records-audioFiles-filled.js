import React from 'react';
import PropTypes from 'prop-types';

const RecordsAudioFilesFilled = props => {
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
        d="M3 5a3 3 0 013-3h8.628v4a3 3 0 003 3H21v10a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm12.96-2.48c0-.466.527-.697.83-.36l2.67 2.961 1.404 1.558c.295.328.079.871-.347.872-.832.003-1.812 0-2.518-.008-1.118 0-2.04-.983-2.04-2.177V2.52zm-4.078 7.035a1.084 1.084 0 00-.909.23c-.254.212-.4.527-.4.86v3.17a2.971 2.971 0 00-.822-.115H8.656c-1.664 0-3.012 1.368-3.012 3.056s1.348 3.055 3.012 3.055H9.75c1.662 0 3.01-1.366 3.012-3.052V12l1.428.29c.593.12 1.17-.27 1.289-.872a1.11 1.11 0 00-.86-1.307l-2.738-.556zm-1.31 7.2a.827.827 0 00-.821-.832H8.656a.827.827 0 00-.822.833c0 .46.368.833.822.833H9.75a.827.827 0 00.821-.833z"
      ></path>
    </svg>
  );
};

RecordsAudioFilesFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsAudioFilesFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsAudioFilesFilled;
