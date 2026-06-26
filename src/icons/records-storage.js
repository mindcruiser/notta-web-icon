import React from 'react';

const RecordsStorage = ({
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
        d="M7.389 1a4 4 0 00-3.946 3.342L1.217 17.696A4 4 0 005 23h14a4 4 0 003.783-5.304L20.557 4.342A4 4 0 0016.612 1H7.388zm12.955 14.232l-1.76-10.56A2 2 0 0016.611 3H7.39a2 2 0 00-1.973 1.671l-1.76 10.56C4.076 15.082 4.528 15 5 15h14c.472 0 .924.082 1.344.232zM5 17h14a2 2 0 110 4H5a2 2 0 110-4zm14 2a1 1 0 11-2 0 1 1 0 012 0zM13.692 6.627A2.586 2.586 0 0012 6c-.624 0-1.226.223-1.692.627-.466.403-.763.96-.835 1.562-.452.12-.847.39-1.115.765a1.904 1.904 0 00.226 2.483c.331.323.769.522 1.236.563h4.36c.468-.04.905-.24 1.236-.563a1.904 1.904 0 00.226-2.484 1.999 1.999 0 00-1.115-.764 2.453 2.453 0 00-.835-1.562z"
      ></path>
    </svg>
  );
};

export default RecordsStorage;
