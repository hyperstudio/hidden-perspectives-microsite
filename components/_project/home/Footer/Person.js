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

const TextWrapper = styled('div')`
	display: flex;
`

const Person = ({ name, role, imgSrc }) => {
	return (
		<Wrapper>
			<Avatar src={imgSrc} />
			<TextWrapper>
				<Typography>{name}</Typography>
				{role && <Typography>{role}</Typography>}
			</TextWrapper>
		</Wrapper>
	)
}

export default Person
