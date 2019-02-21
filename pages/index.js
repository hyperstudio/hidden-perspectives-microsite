import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	color: ${props => props.theme.color.primary};
	font-size: 50px;
`

export default () => <Title>My Waft</Title>
