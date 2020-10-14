import React from 'react';

import ButtonBase from './ButtonBase';

const Button = ({
  children, href, onClick,
}) => (
  <ButtonBase href={href} onClick={onClick}>
    {children}
  </ButtonBase>
);

export default Button;
