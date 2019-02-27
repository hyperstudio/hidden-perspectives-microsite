import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'

export const base = css`
	color: ${props => props.theme.color.typoPrimary};
	font-family: 'Suisse Intl';
	font-size: 16px;
	line-height: 24px;
	font-style: normal;
	font-weight: normal;
	${textAlign};
`

export const h1 = css`
	${base};
	line-height: 48px;
	font-size: 48px;
	letter-spacing: -1px;
	font-weight: 400;
`

export const h2 = css`
	${base};
	line-height: 16px;
	font-size: 36px;
	letter-spacing: -0.5px;
`

export const h3 = css`
	${base};
	line-height: 38px;
	font-size: 28px;
`

export const h4 = css`
	${base};
	line-height: 32px;
	color: ${props => props.theme.color.typoPrimary};
	font-size: 24px;
	letter-spacing: 0.25px;
`

export const h5 = css`
	${base};
	line-height: 26px;
	font-size: 22px;
	letter-spacing: 0.25px;
`

export const h6 = css`
	${base};
	line-height: 16px;
	font-size: 17px;
	letter-spacing: 0.25px;
`

export const subtitle1 = css`
	${base};
	line-height: 16px;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 0.35px;
	margin: 0;
`

export const subtitle2 = css`
	${base};
	line-height: 16px;
	font-size: 48px;
	letter-spacing: -1px;
	margin: 0;
`

export const body1 = css`
	${base};
	color: ${props => props.theme.color.typoPrimary};
	line-height: 28px;
	font-size: 18px;
	letter-spacing: 0.35px;
`

export const body2 = css`
	${base};
	line-height: 24px;
	font-size: 15px;
	letter-spacing: 0.35px;
`

export const caption = css`
	${base};
	line-height: 16px;
	font-size: 12px;
	letter-spacing: 0.35px;
	opacity: 0.55;
`

export const button = css`
	${base};
	font-weight: 600;
	line-height: 16px;
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 0.65px;
	margin: 0;
	padding: 0;
`

export default {
	h1,
	h2,
	h3,
	h4,
	h5,
	subtitle1,
	subtitle2,
	body1,
	body2,
	caption,
	button,
}
