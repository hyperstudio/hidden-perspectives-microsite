import React from 'react'
import styled from 'styled-components'
import OuterRow from '../../../Layout/OuterRow'
import Typography from '../../../Typography'
import { space } from 'styled-system'

const Section = styled('div')`
	width: 50%;
`

const Wrapper = styled('div')`
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	background: #141214;
	width: 100%;
	margin-top: 100px;
	display: flex;
	justify-content: center;
	${space}
`
const OuterWrapper = styled(OuterRow)`
	display: flex;
	flex-direction: row;
`

const Footer = () => {
	return (
		<Wrapper py={[6, 6, 6]}>
			<OuterWrapper rowWidth={'wide'}>
				<Section>
					<Typography>
						This project was initiated by John Tirman, Malcolm Byrne and Hussein Banai
						at the MIT Center for International Studies and Kurt Fendt at MIT
						Hyperstudio.
					</Typography>
				</Section>
				<Section>
					<Typography>
						In close collaboration, this platform was designed and realized between
						December ’18 and February ‘19 by Lucas Vogel, Florian Zia, Bela Kurek,
						Ludwig Frank, and Joshua Pacheco, students of the University of Applied
						Sciences Potsdam.
					</Typography>
				</Section>
			</OuterWrapper>
		</Wrapper>
	)
}

export default Footer
