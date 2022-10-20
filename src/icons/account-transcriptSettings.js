import React from 'react';
import PropTypes from 'prop-types';

const AccountTranscriptSettings = props => {
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
      <path d="M22 11V7.759c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 2 17.046 2 16.242 2H7.758c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 6.29 2 6.954 2 7.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C6.29 22 6.954 22 7.758 22H11a1 1 0 100-2H7.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 01-.874-.874c-.08-.156-.145-.38-.18-.819C4 17.639 4 17.057 4 16.2v-3.7h6.898a1 1 0 100-2H4V7.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874c.156-.08.38-.145.819-.18C6.361 4 6.943 4 7.8 4h8.4c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C20 6.361 20 6.943 20 7.8V11a1 1 0 102 0z"></path>
      <path d="M6 7a1 1 0 011-1h1.4a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
      <path d="M7 15a1 1 0 100 2h2.67a1 1 0 100-2H7z"></path>
      <path d="M11.73 7a1 1 0 011-1h4.52a1 1 0 010 2h-4.52a1 1 0 01-1-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.38 13.466c-.532.159-1.01.44-1.403.811l-.718-.414a1 1 0 10-1 1.732l.717.414a3.506 3.506 0 000 1.62l-.717.414a1 1 0 101 1.732l.718-.414c.392.371.87.652 1.402.81v.83a1 1 0 002 0v-.83a3.494 3.494 0 001.403-.81l.718.414a1 1 0 101-1.732l-.717-.414a3.51 3.51 0 000-1.62l.717-.414a1 1 0 00-1-1.732l-.718.414a3.494 3.494 0 00-1.402-.81v-.828a1 1 0 00-2 0v.827zm-.498 3.353a1.498 1.498 0 112.995 0 1.498 1.498 0 01-2.995 0z"
      ></path>
    </svg>
  );
};

AccountTranscriptSettings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountTranscriptSettings.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountTranscriptSettings;
