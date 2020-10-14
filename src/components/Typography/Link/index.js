import React from 'react';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';

const linkStyles = css`
	border-bottom: 1px solid rgba(48, 48, 48, 0.2);
	transition: ${(props) => props.theme.animation.create()};
	cursor: pointer;
	text-decoration: none;
	font-size: inherit;
	color: inherit;
	:hover {
		border-bottom: 1px solid ${(props) => props.theme.color.primary};
	}
`;

const StyledLink = styled('a')`
	${linkStyles};
`;

const Link = ({
  children, to, href, ...props
}) => {
  if (to) {
    return (
      <NextLink prefetch href={to} passHref>
        <StyledLink>{children}</StyledLink>
      </NextLink>
    );
  }

  return (
    <StyledLink {...props} href={href} target="_blank">
      {children}
    </StyledLink>
  );
};

export default Link;
