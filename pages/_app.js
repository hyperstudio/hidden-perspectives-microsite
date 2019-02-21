import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../lib/theme'

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
				<div className="what">
					<ThemeProvider theme={theme}>
						<Component {...pageProps} />
					</ThemeProvider>
				</div>
			</Container>
		)
	}
}

export default MyApp
