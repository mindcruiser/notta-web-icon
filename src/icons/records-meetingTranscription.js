import React from 'react';
import PropTypes from 'prop-types';

const RecordsMeetingTranscription = props => {
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
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-8.556-1.392v4.155a.293.293 0 01-.294.292H8.16A1.661 1.661 0 016.5 13.392V9.236a.292.292 0 01.295-.292h5.988a1.66 1.66 0 011.661 1.664zm3.056-1.46v5.704a.168.168 0 01-.18.168.167.167 0 01-.085-.03l-2.485-1.768v-2.444l2.485-1.768a.168.168 0 01.265.137z"
      ></path>
    </svg>
  );
};

RecordsMeetingTranscription.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsMeetingTranscription.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsMeetingTranscription;
