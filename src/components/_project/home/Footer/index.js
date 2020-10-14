import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import OuterRow from '../../../Layout/OuterRow';
import Typography from '../../../Typography';
import { media } from '../../../../lib/index';
import Persons from './Persons';
import Logo from './Logo';
import { alphabeticalSort } from '../../../../lib/utils/sortUtil';

const Section = styled('div')`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Wrapper = styled('div')`
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	background: #141214;
	width: 100%;
	margin-top: 100px;
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

const Footer = ({ contributors }) => {
  const students = alphabeticalSort(contributors.filter((person) => person.role !== 'initiator'), 'name');
  const initiators = alphabeticalSort(
    contributors.filter((person) => person.role === 'initiator'),
    'name',
  );
  return (
    <Wrapper py={[6, 6, 6]}>
      <OuterWrapper rowWidth="wide">
        <Section>
          <Typography type="body2">This project was initiated by:</Typography>
          <Persons persons={initiators} />
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Section>
        <Section>
          <Typography type="body2">
            In close collaboration, this platform was designed, concepted and realized
            between December ’18 and February ‘19 by students of the University of
            Applied Sciences Potsdam:
          </Typography>
          <Persons persons={students} />
          <MobileLogo>
            <Logo />
          </MobileLogo>
        </Section>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Footer;
