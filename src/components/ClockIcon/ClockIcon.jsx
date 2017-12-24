import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const ClockIcon = () => (
  <SvgIcon>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 15 15" />
  </SvgIcon>
);

export default ClockIcon;
