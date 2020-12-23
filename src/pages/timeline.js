import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import Typography from '../components/Typography';
import Errors from '../components/Errors';
import { media } from '../lib';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 7rem - 5rem - 64px - 46.5px);
`;

const Header = styled('div')`
  width: 90%;
  > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }
	${media.sm`
    text-align: center;
	`}
`;

const TwoColumn = styled('div')`
  display: flex;
  flex-direction: row;
  width: 90%;
	${media.sm`
		flex-direction: column;
	`}
`;

const LeftColumn = styled('div')`
  flex-basis: 33%;
  border-right: 1px solid rgb(222, 226, 230);
  padding: 1rem 2rem 1rem 1rem;
	${media.sm`
    padding: 1rem 1rem 1rem 2rem;
    border-right: 0;
    border-bottom: 1px solid rgb(222, 226, 230);
	`}
`;
const RightColumn = styled('div')`
  flex-basis: 66%;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-top: 1rem;
	${media.sm`
    padding: 1rem 1rem 1rem 2rem;
  `}
`;

const TimelineLink = styled('div')`
  opacity: 0.65;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 5%;
  cursor: pointer;
  &.active,
  &:hover {
    opacity: 1;
  }
`;

const Timeline = (props) => {
  const { errors, phases, questions } = props;
  const { data } = phases;
  const qData = questions.data || [];

  const [phaseState, setPhaseState] = useState({ summary: 'Please select a timeline entry.' });
  const [questionState, setQuestionState] = useState([]);

  useEffect(() => {
    setQuestionState(qData.filter((q) => q.phase_id === phaseState.id));
  }, [phaseState]);

  return (
    <Wrapper>
      <Errors errors={errors || []} />
      <Header rowWidth="wide">
        <Typography type="h4" id="timeline">Timeline</Typography>
      </Header>
      <TwoColumn rowWidth="wide">
        <LeftColumn>
          <ul id="phases">
            {data && data.map((phase) => (
              <li key={phase.id}>
                <TimelineLink
                  href="timeline#"
                  onClick={() => setPhaseState(phase)}
                  className={phaseState.id === phase.id ? 'active' : ''}
                >
                  <Typography type="lidate">
                    {phase.end_year
                      ? `${phase.start_year.split('-')[0]}–${phase.end_year.split('-')[0]}`
                      : `${phase.start_year.split('-')[0]}`}
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
          {phaseState.start_year && (
            <>
              <Typography type="lidate">
                {phaseState.end_year
                  ? `${phaseState.start_year.split('-')[0]}–${phaseState.end_year.split('-')[0]}`
                  : `${phaseState.start_year.split('-')[0]}`}
              </Typography>
              <Typography type="h4">{phaseState.name}</Typography>
              {phaseState.subtitle && (
                <Typography type="subtitle1">{phaseState.subtitle}</Typography>
              )}
            </>
          )}
          <Typography type="body2" id="timeline">{ReactHtmlParser(phaseState.summary)}</Typography>
          {questionState.length > 0 && (
            <>
              <Typography type="body1">Framing Questions</Typography>
              <ol>
                {questionState.map((question) => (
                  <li key={question.id}>
                    <Typography type="body2">{question.value}</Typography>
                  </li>
                ))}
              </ol>
            </>
          )}
          {phaseState.documents && (
            <>
              <Typography type="body1">Documents</Typography>
              {phaseState.documents.map((doc) => <Typography type="body2">{doc}</Typography>)}
            </>
          )}
        </RightColumn>
      </TwoColumn>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/items/phases?sort=start_year`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!res.error) {
    const phases = await res.json();
    const qRes = await fetch(`${process.env.API_URL}/items/questions?sort=phase_id`) // eslint-disable-line no-undef
      .catch((err) => ({
        error: err.message,
      }));
    if (!qRes.error) {
      const questions = await qRes.json();
      return { props: { phases, questions } };
    }
    return { props: { phases, errors: [qRes.error] } };
  } return { props: { errors: [res.error] } };
}


export default Timeline;
