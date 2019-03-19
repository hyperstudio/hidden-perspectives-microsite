import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Typography from '../components/Typography'
import Link from '../components/Typography/Link'
import OuterRow from '../components/Layout/OuterRow'
import { space } from 'styled-system'
// import Feature from '../components/_project/home/Feature'
import Features from '../components/_project/home/Features'
import Footer from '../components/_project/home/Footer'
import Button from '../components/Button'
import Vimeo from '../components/Vimeo'
import { dark } from '../lib/theme'

const Wrapper = styled('div')`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`

const HeaderWraper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	${space}
`

const FeatureWrapper = styled('div')`
	background: #141214;
	width: 100%;
	padding: 80px 0 0;
	margin-top: 160px;
`

const ButtonWrapper = styled('div')`
	width: 100%;
	margin-top: 48px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
`

const features = [
	{
		label: `Timeline – Understand the chronology of events, documents and the involvement of protagonists.`,
	},
	{
		label: 'Original Documents – Study scans and transcripts of all primary sources.',
	},
]

const Index = ({}) => {
	return (
		<Wrapper>
			<HeaderWraper py={[6]}>
				<OuterRow rowWidth={'wide'}>
					<Typography type="h1">Hidden Perspectives</Typography>
					<Typography type="h3">
						Hidden Perspectives is an interactive digital archive consisting of
						documents and events relating to the U.S.-Iran relationship’s history since
						the 1978 – 1979 Iranian revolution.
					</Typography>
					<Vimeo
						src={
							'https://player.vimeo.com/video/320714857?autoplay=1&loop=1&autopause=0'
						}
						width={1280}
						height={660}
					/>

					<ButtonWrapper>
						<Button href={'https://build.bsilverm.now.sh/'}>
							<Typography color={'typoAccent'} type={'button'}>
								Launch App{' '}
							</Typography>
						</Button>
					</ButtonWrapper>
				</OuterRow>
			</HeaderWraper>
			<OuterRow rowWidth={'narrow'}>
				<Typography type="h4">About</Typography>
				<Typography type="body1">
					The U.S.-Iran relationship has long been staggered by each party’s ignorance
					about the other. Missed opportunities for improvement rose not merely from bad
					luck but from knowing too little vital information about the other. 40 years
					after the Iranian revolution, we have still lots to learn about this complex
					interrelation.
				</Typography>

				<Typography type="body1">
					To address this knowledge gap <Link to="/">John Tirman</Link>,{' '}
					<Link to="/">Malcolm Byrne</Link> and <Link to="/">Hussein Banai </Link> have
					approached this relationship in an unusual way. They conducted several “critical
					oral history” conferences, where they brought together policymakers from several
					countries, mainly Iran and the United States but also others, involved
					particularly in negotiations from Britain, France, and Italy. In various
					sessions, they interviewed key players and absorbed contemporary scholarship to
					identify hidden perspectives and missed opportunities.
				</Typography>

				<Typography type="body1">
					As a basis for the conversation, they provided a collection of documents
					procured through Freedom of Information Act requests and open-source documents,
					such as published interviews, analyses, memoirs, and more. This archive of
					documents is the bulk of what is now accessible on this platform.
				</Typography>

				<Typography type="body1">
					For it to be accessible to other scholars and the public, a digital presence has
					been developed. Hidden Perspectives is the result of this development. It is an
					attempt to create a framework to explore the material and deep dive into
					specific historical contexts.
				</Typography>

				<Typography type="h4">The Digital Archive</Typography>

				<Typography type="body1">
					The digital archive consists of 560 documents, dating from 1971 to 2012. Those
					have been summarized and enhanced with additional metadata. Furthermore, a
					thousand event entries ranging from 1975 to 1999 extend the dataset.
				</Typography>
				<Typography type="body1">
					In order to uncover patterns within the archive and to contextualize individual
					documents and events, connections were made. We also used the process called
					named entity extraction to identify protagonists involved in the dataset. While
					the dataset might contain human biases and automation mistakes, it served as an
					initial foundation for further investigation and will be improved in the long
					run. Ultimately, those connected entries were visualized in an interactive
					digital archive that provides an elegant way to access and explore the delicate
					connection between the two countries.
				</Typography>
			</OuterRow>
			<ThemeProvider theme={dark}>
				<React.Fragment>
					<FeatureWrapper>
						<Features />
						<Footer />
					</FeatureWrapper>
				</React.Fragment>
			</ThemeProvider>
		</Wrapper>
	)
}

export default Index
