import React from 'react'
import styled from 'styled-components'

import Typography from '../../../Typography'

const Wrapper = styled('a')`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
	align-items: center;
	cursor: pointer;
	max-width: 400px;
	border-radius: 40px;
	text-decoration: none;
	transition: ${props => props.theme.animation.create(['background'])};
	:hover {
		background: rgba(255, 255, 255, 0.05);
	}
`

const AvatarPlaceHolder = styled('img')`
	background: rgba(255, 255, 255, 0.1);
	width: 56px;
	height: 56px;
	border-radius: 100%;
	margin-right: 16px;
`

const TextWrapper = styled('div')`
	display: flex;
	flex-direction: column;
`

const Person = ({ name, label, organization, role, url }) => {
	const imgSrc = `https://res.cloudinary.com/podocu/image/upload/v1551281230/university/hidden_perspectives/persons/${name.replace(
		' ',
		''
	)}.png`
	return (
		<Wrapper href={url} target="_blank">
			<AvatarPlaceHolder src={imgSrc} />
			<TextWrapper>
				<Typography m={0} mt={'-1px'} type={'body2'}>
					{name}
				</Typography>
				{organization && role === 'initiator' && (
					<Typography mt={0} mb={0} type={'caption'}>
						{organization}
					</Typography>
				)}
			</TextWrapper>
		</Wrapper>
	)
}

export default Person
