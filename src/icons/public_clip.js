import React from 'react';

const PublicClip = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M10.594 2.736a5.693 5.693 0 00-7.755 2.16l-.694 1.23a1.122 1.122 0 00.426 1.528l7.433 4.194-1.868 1.076-5.565 3.14c-.54.304-.73.989-.426 1.529l.693 1.229a5.693 5.693 0 109.917-5.595l-.279-.495 9.542-5.495a2 2 0 00-2.73-.735l-6.362 3.664a5.693 5.693 0 00-2.332-7.43zM4.318 17.374l4.7-2.651.11-.062 1.623-.916.262.465a3.693 3.693 0 01-6.433 3.629l-.262-.465zM4.58 5.88a3.693 3.693 0 116.433 3.63l-.262.464-6.433-3.629.262-.465zm11.392 7.332a1 1 0 00-1.02 1.72l4.298 2.553a2 2 0 002.74-.698l-6.017-3.575z"
      ></path>
    </svg>
  );
};

export default PublicClip;
