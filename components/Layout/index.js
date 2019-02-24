import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../lib/theme/breakpoints'

const Wrapper = styled('div')`
	display: flex;
	justify-content: center;
`

export default function Layout({ children }) {
	return <Wrapper>{children}</Wrapper>
}
