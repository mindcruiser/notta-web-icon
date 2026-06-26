import React from 'react';

const FilesPdfOutlined = ({
  color = 'currentColor',
  size = '16',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15.172 2a3 3 0 012.121.879l2.828 2.828A3 3 0 0121 7.828V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h9.172zM6 4a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V9h-1a3 3 0 01-3-3V4H6zm6.5 3.5c0 2.49 2.144 5.16 4.816 6.052l-.458 1.938c-3.135-.448-6.376.89-9.303 2.842l-1.18-1.613c1.086-.87 2.128-2.343 2.9-4.066.77-1.716 1.225-3.576 1.225-5.153h2zm-.696 4.129a17.417 17.417 0 01-1.168 2.799 15.073 15.073 0 012.874-.832 9.661 9.661 0 01-1.706-1.967zM17 6a1 1 0 001 1h.586L17 5.414V6z"></path>
    </svg>
  );
};

export default FilesPdfOutlined;
