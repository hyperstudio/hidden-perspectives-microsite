import React, { useState } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import Typography from '../components/Typography';
import Errors from '../components/Errors';
import OuterRow from '../components/Layout/OuterRow';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 7rem - 5rem - 64px - 46.5px);
`;

const Header = styled(OuterRow)`
  width: 100%;
`;

const TwoColumn = styled(OuterRow)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftColumn = styled('div')`
  flex-basis: 33%;
  border-right: 1px solid rgb(222, 226, 230);
  padding: 1rem 2rem 1rem 0;
`;
const RightColumn = styled('div')`
  flex-basis: 66%;
  padding-left: 2rem;
  padding-top: 1rem;
`;

const TimelineLink = styled('div')`
  opacity: 0.65;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &.active,
  &:hover {
    opacity: 1;
  }
`;

const Timeline = (props) => {
  const { errors, phases } = props;
  const { data } = phases;

  const [phaseState, setPhaseState] = useState({ summary: 'Please select a timeline entry.' });

  return (
    <Wrapper>
      <Errors errors={errors || []} />
      <Header rowWidth="wide">
        <Typography type="h4" id="timeline">Timeline</Typography>
      </Header>
      <TwoColumn rowWidth="wide">
        <LeftColumn>
          <ul id="phases">
            {data.map((phase) => (
              <li key={phase.id}>
                <TimelineLink
                  href="timeline#"
                  onClick={() => setPhaseState(phase)}
                  className={phaseState.id === phase.id ? 'active' : ''}
                >
                  <Typography type="lidate">
                    {`${phase.start_date.split('-')[0]}–${phase.end_date.split('-')[0]}`}
                  </Typography>
                  <Typography type="li">
                    {phase.name}
                  </Typography>
                </TimelineLink>
              </li>
            ))}
          </ul>
        </LeftColumn>
        <RightColumn>
          {phaseState.start_date && (
            <>
              <Typography type="lidate">{`${phaseState.start_date.split('-')[0]}–${phaseState.end_date.split('-')[0]}`}</Typography>
              <Typography type="h4">{phaseState.name}</Typography>
            </>
          )}
          <Typography type="body2" id="timeline">{ReactHtmlParser(phaseState.summary)}</Typography>
        </RightColumn>
      </TwoColumn>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/items/phases?sort=start_date`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!res.error) {
    const phases = await res.json();
    return { props: { phases } };
  } return { props: { errors: [res.error] } };
}


export default Timeline;
