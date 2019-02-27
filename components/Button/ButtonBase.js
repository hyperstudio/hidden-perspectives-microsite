import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const styles = css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	-webkit-tap-highlight-color: transparent;
	background-color: transparent;
	outline: none;
	border: 0;
	margin: 0;
	border-radius: 0;
	padding: 0;
	cursor: pointer;
	user-select: none;
	vertical-align: middle;
	text-decoration: none;
	color: inherit;
	padding: 6px 24px;
	height: 32px;
	background-color: rgba(248, 179, 50, 0.45);
	border-radius: 4px;
	transition: ${props => props.theme.animation.create()};
	&:hover {
		background-color: rgba(248, 179, 50, 0.65);
	}
`

const ButtonBase = ({ children, href, onClick }) => {
	const tag = href ? 'a' : 'button'
	const props = {}

	if (href) {
		props.href = href
	}

	const Component = styled(tag)`
		${styles}
	`

	return <Component {...props}>{children}</Component>
}

export default ButtonBase
