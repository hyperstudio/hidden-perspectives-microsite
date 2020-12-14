import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import { dark } from '../../lib/theme';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <ThemeProvider theme={dark}>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}
