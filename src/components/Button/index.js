import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonBase from './ButtonBase';

const Button = ({
  children, color, disabled, size, href, onClick,
}) => (
  <ButtonBase href={href} onClick={onClick}>
    {children}
  </ButtonBase>
);

export default Button;
