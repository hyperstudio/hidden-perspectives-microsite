import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  padding: 0px 12px;
  height: 32px;
  background-color: rgba(248, 179, 50, 0.45);
  border-radius: 20px;
  transition: ${(props) => props.theme.animation.create()};
  &:hover {
    background-color: rgba(248, 179, 50, 0.65);
  }
	&:focus {
		box-shadow: inset 0 0 0 2px #c0c0c0;
	}
`;

const ButtonBase = ({ children, href, onClick }) => {
  const tag = href ? 'a' : 'button';

  const Component = styled(tag)`
    ${styles}
  `;

  return href
    ? <Component href={href}>{children}</Component>
    : <Component onClick={onClick}>{children}</Component>;
};

export default ButtonBase;
