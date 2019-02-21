import React from 'react'
import styled from 'styled-components'
import Typography from '../components/Typography'

const Title = styled.h1`
	color: ${props => props.theme.color.primary};
	font-size: 50px;
`

export default () => <Typography type="h1">Hidden Perspectives</Typography>
