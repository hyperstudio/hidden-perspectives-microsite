import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import OuterRow from '../Layout/OuterRow';
import Typography from '../Typography';
import { media } from '../../lib/index';
import Persons from './Persons';
import { alphabeticalSort } from '../../lib/utils/sortUtil';

const Section = styled('div')`
	display: flex;
	flex-direction: column;
	position: relative;
	${space}
`;

const Wrapper = styled('div')`
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	width: 100%;
	display: flex;
	justify-content: center;
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
		}
	`}
`;

const Team = ({ contributors, photoUrls }) => {
  const { data } = contributors;
  const students = alphabeticalSort(
    data.filter((person) => person.affiliation === 'fhp'),
    'name',
  );
  const initiators = alphabeticalSort(
    data.filter((person) => person.role === 'initiator'),
    'name',
  );
  const aai = alphabeticalSort(
    data.filter((person) => person.affiliation === 'aai'),
    'name',
  );
  return (
    <Wrapper>
      <OuterWrapper rowWidth="wide">
        <Section>
          <Typography type="h4">Team</Typography>
          <Typography type="body2">This project was initiated by:</Typography>
          <Persons persons={initiators} photoUrls={photoUrls} />
          <Typography type="body2" mt="4">
            Additional design and development in 2020 by:
          </Typography>
          <Persons persons={aai} photoUrls={photoUrls} />
        </Section>
        <Section pt={(6)}>
          <Typography type="body2">
            In close collaboration, this platform was designed, concepted and realized
            between December &rsquo;18 and February &rsquo;19 by students of the University of
            Applied Sciences Potsdam:
          </Typography>
          <Persons persons={students} photoUrls={photoUrls} />
        </Section>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Team;
