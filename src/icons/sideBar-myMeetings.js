import React from 'react';
import PropTypes from 'prop-types';

const SideBarMyMeetings = props => {
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
        d="M8 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h.838c.528 0 .982 0 1.357.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v9.678c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H6.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 012 17.839V8.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296C5.18 4 5.635 4 6.161 4H7V3a1 1 0 011-1zm7 4a1 1 0 102 0h.8c.577 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 01.437.437c.025.05.063.15.085.422C20 7.25 20 7.623 20 8.2V10H4V8.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 01.437-.437c.05-.025.15-.063.422-.085C5.25 6 5.623 6 6.2 6H7a1 1 0 002 0h6zm5 6H4v5.8c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 00.437.437c.05.025.15.063.422.085C5.25 20 5.623 20 6.2 20h11.6c.577 0 .949 0 1.232-.024.272-.022.372-.06.422-.085a1 1 0 00.437-.437c.025-.05.063-.15.085-.422C20 18.75 20 18.377 20 17.8V12zm-8 4a1 1 0 01-1 1H9a1 1 0 110-2h2a1 1 0 011 1z"
      ></path>
    </svg>
  );
};

SideBarMyMeetings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarMyMeetings.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarMyMeetings;
