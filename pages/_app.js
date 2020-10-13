import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../lib/theme'
import Layout from '../components/Layout'
import SuisseIntl from '../static/fonts/SuisseIntl'
import GlobalStyle from '../lib/theme/GlobalStyle'
const description = 'A collaborative exploration tool for analysing the US-IRAN relashionships'

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
			<>
				<Head>
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<title> US-Iran Relations: National Narratives, America, Iran, and the Clash of Civilizations </title>
					<meta property="og:description" content={description} />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
				</Head>
				<SuisseIntl />
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</>
		)
	}
}

export default MyApp
