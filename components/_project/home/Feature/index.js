import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import OuterRow from '../../../Layout/OuterRow'
import { media } from '../../../../lib'

const Wrapper = styled('div')`
	width: 60vw;
	padding: 40px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${space};
	${media.xs`
		width: 80vw;
		padding: 8px;
		padding-top: 80px;
	`};
`

const VideoWrapper = styled('div')`
	background: white;
	padding-bottom: 62.5%;
	box-shadow: ${props => props.theme.shadow[14]};
	position: relative;
`

const Img = styled('img')`
	width: 100%;
	position: absolute;
`

const Feature = ({ label, videoSrc, padding, featureId, gif, active, onClick }) => {
	const src = `https://res.cloudinary.com/podocu/image/upload/dpr_2.0,f_auto,q_80/v1551389306/university/hidden_perspectives/${featureId}.png`

	return (
		<Wrapper pb={[5, 2]} pt={padding} onClick={onClick}>
			<OuterRow rowWidth={'wide'} style={{ width: '100%', padding: 0 }}>
				<VideoWrapper>
					<Img src={gif} />
				</VideoWrapper>
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
