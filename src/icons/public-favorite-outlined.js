import React from 'react';

const PublicFavoriteOutlined = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.997 1.5a1 1 0 01.898.555l2.864 5.77 6.385.931a1 1 0 01.556 1.704l-4.645 4.549 1.103 6.32a1 1 0 01-1.456 1.053L12 19.343l-5.701 3.04a1 1 0 01-1.456-1.055l1.111-6.318-4.652-4.548a1 1 0 01.556-1.705l6.42-.931 2.824-5.765a1 1 0 01.896-.56zm.008 3.261L9.841 9.18a1 1 0 01-.755.55l-4.94.716 3.583 3.502a1 1 0 01.285.889l-.847 4.816 4.362-2.325a1 1 0 01.94 0l4.366 2.327-.84-4.82a1 1 0 01.285-.886l3.578-3.504-4.907-.716a1 1 0 01-.751-.545l-2.195-4.422z"
      ></path>
    </svg>
  );
};

export default PublicFavoriteOutlined;
