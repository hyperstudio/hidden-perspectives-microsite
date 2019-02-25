import React from 'react'
import styled from 'styled-components'

import Typography from '../../../Typography'

const Wrapper = styled('div')`
	display: flex;
	justify-content: center;
	flex-direction: row;
`

const Avatar = styled('img')`
	width: 80px;
	height: 80px;
	border-radius: 100%;
`

const AvatarPlaceHolder = styled('div')`
	background: rgba(255, 255, 255, 0.1);
	width: 80px;
	height: 80px;
	border-radius: 100%;
`

const TextWrapper = styled('div')`
	display: flex;
`

const Person = ({ name, label, imgSrc }) => {
	return (
		<Wrapper>
			<AvatarPlaceHolder />
			<TextWrapper>
				<Typography>{name}</Typography>
				{label && <Typography>{label}</Typography>}
			</TextWrapper>
		</Wrapper>
	)
}

export default Person
