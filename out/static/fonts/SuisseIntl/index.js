import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
	@font-face {
								font-family: 'Suisse Intl';
								src: url('SuisseIntl-Medium.woff2') format('woff2'),
									url('SuisseIntl-Medium.woff') format('woff');
								font-weight: 500;
								font-style: normal;
							}

							@font-face {
								font-family: 'Suisse Intl';
								src: url('/static/fonts/SuisseIntl/SuisseIntl-Bold.woff2')
										format('woff2'),
									url('/static/fonts/SuisseIntl/SuisseIntl-Bold.woff')
										format('woff');
								font-weight: bold;
								font-style: normal;
							}

							@font-face {
								font-family: 'Suisse Intl';
								src: url('/static/fonts/SuisseIntl/SuisseIntl-Book.woff2')
										format('woff2'),
									url('/static/fonts/SuisseIntl/SuisseIntl-Book.woff')
										format('woff');
								font-weight: normal;
								font-style: normal;
							}

							@font-face {
								font-family: 'Suisse Intl';
								src: url('/static/fonts/SuisseIntl/SuisseIntl-SemiBold.woff2')
										format('woff2'),
									url('/static/fonts/SuisseIntl/SuisseIntl-SemiBold.woff')
										format('woff');
								font-weight: 600;
								font-style: normal;
							}
`
