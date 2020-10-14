import { css } from 'styled-components';
import breakpoints from './theme/breakpoints';

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${breakpoints[label] / 16}em) {
			${css(...args)}
		}
	`;

  return acc;
}, {});
