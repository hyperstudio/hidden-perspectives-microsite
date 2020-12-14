import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import OuterRow from '../../../Layout/OuterRow';
import { media } from '../../../../lib/index';
import Typography from '../../../Typography';
import Link from '../../../Typography/Link';
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
  justify-content: space-between;
  max-width: 100%;
  width: 90%;
	${media.xs`
		flex-direction: column;
		> div {
			width: auto;
		}
	`}
`;

const LogoWrapper = styled('div')`
	justify-self: flex-end;
	${media.xs`
		display: none;
	`}
`;

const MobileLogo = styled('div')`
	justify-self: center;
	display: none;
	${media.xs`
		display: block;
	`}
`;

const FooterLink = styled(Link)`
  &:focus {
		box-shadow: inset 0 0 0 2px #c0c0c0;
	}
`;

const FooterType = styled(Typography)`
  margin-top: 0.5rem;
  margin-bottom: 0;
	&:focus {
		box-shadow: inset 0 0 0 2px #c0c0c0;
	}
`;

const Footer = () => (
  <Wrapper py={[4, 4, 4]}>
    <OuterWrapper rowWidth="wide">
      <Section>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MobileLogo>
          <Logo />
        </MobileLogo>
      </Section>
      <Section>
        <FooterLink href="https://accessibility.mit.edu/">
          <FooterType type="body2" color="typoPrimary">Accessibility</FooterType>
        </FooterLink>
      </Section>
    </OuterWrapper>
  </Wrapper>
);

export default Footer;
