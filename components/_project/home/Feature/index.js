import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import OuterRow from '../../../Layout/OuterRow'
import Typography from '../../../Typography'

const Wrapper = styled('div')`
	width: 60vw;
	padding: 40px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${space};
`

const VideoWrapper = styled('div')`
	background: white;
	padding-bottom: 56.25%;
	box-shadow: ${props => props.theme.shadow[14]};
`

const Feature = ({ label, videoSrc, padding }) => {
	const [header, text] = label.split('– ')
	console.log(header)
	return (
		<Wrapper pb={[5]} pt={padding}>
			<OuterRow rowWidth={'wide'}>
				<VideoWrapper />
			</OuterRow>
		</Wrapper>
	)
}

Feature.propTypes = {
	label: PropTypes.string,
	videoSrc: PropTypes.string,
	padding: PropTypes.number,
}

Feature.defaultProps = {
	label: 'Original Documents – study scans and transcripts of all primary sources.',
	videoSrc: '',
	padding: 5,
}

export default Feature
