import { css } from 'styled-components';
import { textAlign } from 'styled-system';
import { media } from '../../lib';

export const base = css`
	color: ${(props) => props.theme.color.typoPrimary};
	font-family: 'Suisse Intl';
	font-size: 16px;
	line-height: 24px;
	font-style: normal;
	font-weight: normal;
	${textAlign};
`;

export const h1 = css`
	${base};
	line-height: 48px;
	font-size: 48px;
	letter-spacing: -1px;
	font-weight: 400;
	${media.xs`
		font-size: 40px;
	`}
`;

export const h2 = css`
	${base};
	line-height: 40px;
	font-size: 36px;
	letter-spacing: -0.5px;
	${media.xs`
		font-size: 32px;
		line-height: 32px;
	`}
`;

export const h3 = css`
	${base};
	line-height: 38px;
	font-size: 28px;
	${media.xs`
		font-size: 24px;
		line-height: 32px;
	`}
`;

export const h4 = css`
	${base};
	line-height: 32px;
	color: ${(props) => props.theme.color.typoPrimary};
	font-size: 24px;
	letter-spacing: 0.25px;
	${media.xs`
		font-size: 20px;
	`}
`;

export const h5 = css`
	${base};
	line-height: 26px;
	font-size: 22px;
	letter-spacing: 0.25px;
	${media.xs`
		font-size: 18px;
	`}
`;

export const h6 = css`
	${base};
	line-height: 16px;
	font-size: 17px;
	letter-spacing: 0.25px;
`;

export const subtitle1 = css`
	${base};
	line-height: 1.25;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 0.35px;
  margin: -1rem 0 2rem 0;
`;

export const subtitle2 = css`
	${base};
	line-height: 16px;
	font-size: 48px;
	letter-spacing: -1px;
	margin: 0;
`;

export const body1 = css`
	${base};
	color: ${(props) => props.theme.color.typoPrimary};
	line-height: 28px;
	font-size: 18px;
	letter-spacing: 0.35px;
	${media.xs`
		font-size: 16px;
		line-height: 26px;
	`}
`;

export const body2 = css`
	${base};
	line-height: 24px;
	font-size: 15px;
	letter-spacing: 0.35px;
`;

export const caption = css`
	${base};
	line-height: 16px;
	font-size: 12px;
	letter-spacing: 0.35px;
	opacity: 0.55;
`;

export const button = css`
	${base};
	line-height: 16px;
	font-size: 1rem;
  ${media.xs`
    font-size: 0.75rem;
	line-height: 0.75rem;
  `}
	margin: 0;
	padding: 0;
`;

export const li = css`
  ${base};
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 0.35px;
  flex-basis: 70%;
  margin-bottom: 0.5rem;
`;

export const lidate = css`
  ${base};
  line-height: 1.5;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.35px;
`;

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  li,
  lidate,
  subtitle1,
  subtitle2,
  body1,
  body2,
  caption,
  button,
};
