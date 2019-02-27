import React from 'react'
import styled from 'styled-components'
import OuterRow from '../../../Layout/OuterRow'
import Typography from '../../../Typography'
import { space } from 'styled-system'
import Persons, { students, initiators } from './Persons'
import Logo from './Logo'

const Section = styled('div')`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

const LogoWrapper = styled('div')`
	bottom: 0;
	padding-left: 4px;
	padding-bottom: 4px;
`

const Footer = () => {
	return (
		<Wrapper py={[6, 6, 6]}>
			<OuterWrapper rowWidth={'wide'}>
				<Section>
					<Typography type={'body2'}>
						This project was initiated by:
						<Persons persons={initiators} />
					</Typography>
					<LogoWrapper>
						<Logo />
					</LogoWrapper>
				</Section>
				<Section>
					<Typography type={'body2'}>
						In close collaboration, this platform was designed, concepted and realized
						between December ’18 and February ‘19 by students of the University of
						Applied Sciences Potsdam:
					</Typography>
					<Persons persons={students} />
				</Section>
			</OuterWrapper>
		</Wrapper>
	)
}

export default Footer
