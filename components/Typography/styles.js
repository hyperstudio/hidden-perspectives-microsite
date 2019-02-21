import styled, { css } from 'styled-components'

export const base = css`
	color: ${props => props.theme.typoPrimary};
	font-family: 'Suisse Intl';
	font-size: 16px;
	line-height: 24px;
	font-style: normal;
	font-weight: normal;
`

export const h1 = css`
	${base};
	line-height: 16px;
	font-size: 48px;
	letter-spacing: -1px;
`

export const body1 = css`
	${base};
	line-height: 16px;
	font-size: 15px;
	letter-spacing: 0.35px;
`

export default {
	h1,
	body1,
}
