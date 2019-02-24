import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import OuterRow from '../../../Layout/OuterRow'
import Typography from '../../../Typography'

const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${space};
`

const VideoWrapper = styled('div')`
	background: white;
	padding-bottom: 56.25%;
`

const Feature = ({ label, videoSrc, padding }) => {
	return (
		<Wrapper pb={[5]} pt={padding}>
			<OuterRow rowWidth={'narrow'}>
				<Typography type="h4" color={'#fff'} textAlign={'center'}>
					{label}
				</Typography>
			</OuterRow>
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
