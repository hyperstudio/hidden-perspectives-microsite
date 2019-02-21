import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../lib/theme/breakpoints'

const Wrapper = styled('div')`
	max-width: ${breakpoints.md}px;
	padding: 24px;
	margin: 0 auto;
`

export default function Layout({ children }) {
	return <Wrapper>{children}</Wrapper>
}
