import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
	display: flex;
	justify-content: center;
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
