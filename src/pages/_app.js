import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';
import Layout from '../components/Layout';
import GlobalStyle from '../lib/theme/GlobalStyle';

const description = 'A collaborative exploration tool for analysing the US-IRAN relashionships';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <title>
            US-Iran Relations: National Narratives, America,
            Iran, and the Clash of Civilizations
          </title>
          <meta property="og:description" content={description} />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
