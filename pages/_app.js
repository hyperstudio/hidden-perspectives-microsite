import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../lib/theme'
import Layout from '../components/Layout'
import SuisseIntl from '../static/fonts/SuisseIntl'
import GlobalStyle from '../lib/theme/GlobalStyle'

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<Head>
					<link
						rel="stylesheet"
						type="text/css"
						charset="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
				</Head>
				<SuisseIntl />
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</Container>
		)
	}
}

export default MyApp
