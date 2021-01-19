import React from 'react';

import ButtonBase from './ButtonBase';

const Button = ({
  children, href, onClick, target,
}) => (
  <ButtonBase href={href} onClick={onClick} target={target}>
    {children}
  </ButtonBase>
);

export default Button;
