import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import OuterRow from '../../../Layout/OuterRow';
import { media } from '../../../../lib/index';
import Logo from './Logo';

const Section = styled('div')`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Wrapper = styled('div')`
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	background: #141214;
	width: 100%;
	margin-top: 5rem;
	display: flex;
	justify-content: center;
	${space}
`;
const OuterWrapper = styled(OuterRow)`
	display: flex;
	flex-direction: row;
	> div {
		width: 50%;
	}
	${media.xs`
		flex-direction: column;
		> div {
			width: auto;
			margin-bottom: 48px;
		}
	`}
`;

const LogoWrapper = styled('div')`
	bottom: 0;
	padding-left: 4px;
	padding-bottom: 4px;
	justify-self: flex-end;
	position: absolute;
	${media.xs`
		display: none;
	`}
`;

const MobileLogo = styled('div')`
	padding-left: 4px;
	padding-top: 120px;
	justify-self: center;
	display: none;
	${media.xs`
		display: block;
	`}
`;

const Footer = () => (
  <Wrapper py={[6, 6, 6]}>
    <OuterWrapper rowWidth="wide">
      <Section>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Section>
      <Section>
        <MobileLogo>
          <Logo />
        </MobileLogo>
      </Section>
    </OuterWrapper>
  </Wrapper>
);

export default Footer;
