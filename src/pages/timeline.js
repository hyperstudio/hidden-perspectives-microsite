import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import Scroll from 'react-scroll';
import Typography from '../components/Typography';
import Document from '../components/Document';
import Errors from '../components/Errors';
import { media } from '../lib';

const ScrollDiv = Scroll.ScrollElement;

const ScrolDivElement = ScrollDiv((props) => {
  const { children, parentBindings } = props;
  return (
    <div {...props} ref={(el) => { parentBindings.domNode = el; }} name="rightColumn">
      {children}
    </div>
  );
});

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
	${media.md`
    text-align: center;
	`}
`;

const TwoColumn = styled('div')`
  display: flex;
  flex-direction: row;
  width: 90%;
	${media.md`
		flex-direction: column;
	`}
`;

const LeftColumn = styled('div')`
  flex-basis: 33%;
  border-right: 1px solid rgb(222, 226, 230);
  padding: 1rem 2rem 1rem 1rem;
	${media.md`
    padding: 1rem 1rem 1rem 2rem;
    border-right: 0;
    border-bottom: 1px solid rgb(222, 226, 230);
	`}
`;
const RightColumn = styled(ScrolDivElement)`
  flex-basis: 66%;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-top: 1rem;
	${media.md`
    padding: 1rem 1rem 1rem 2rem;
  `}
`;

const TimelineLink = styled('div')`
  opacity: 0.65;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0%;
  border-left: ${({ subphase }) => (subphase ? '2px dotted rgb(222, 226, 230)' : '')};
  div:nth-child(1) {
    padding-left: ${({ subphase }) => (subphase ? '0.5rem' : '')};
    flex-basis: 31%;
    font-weight: ${({ subphase }) => (subphase ? 'normal' : '')};;
  }
  div:nth-child(2) {
    flex-basis: 65%;
    font-weight: ${({ subphase }) => (!subphase ? 'bold' : '')};;
  }
  cursor: pointer;
  &.active,
  &:hover {
    opacity: 1;
  }
`;

const DocumentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Timeline = ({
  errors, phases, questions, documents, thumbnailUrls,
}) => {
  const { data } = phases;
  const qData = questions.data || [];
  const docData = documents.data || [];

  const [phaseState, setPhaseState] = useState({});
  const [questionState, setQuestionState] = useState([]);
  const [documentState, setDocumentState] = useState([]);

  const scroll = Scroll.scroller;

  useEffect(() => {
    setQuestionState(qData.filter((q) => q.phase_id === phaseState.id));
  }, [phaseState]);

  useEffect(() => {
    setDocumentState(docData.filter((d) => d.phase_id === phaseState.id));
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
                  onClick={() => {
                    setPhaseState(phase);
                    scroll.scrollTo('rightColumn', {
                      duration: 500,
                      delay: 100,
                      smooth: true,
                    });
                  }}
                  subphase={phase.subphase === true}
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
          {!phaseState.start_year && (
            <>
              <Typography type="lidate">About This Timeline</Typography>
              <Typography type="h4">Phases of the U.S.-Iran Relationship</Typography>
              <Typography type="body2" id="timeline">
                This timeline was sourced from briefing books compiled for a series of critical oral
                history conferences on the U.S.-Iran Relationship. Edited summaries and additional
                details provided by John Tirman.
              </Typography>
              <Typography type="body2">
                To get started, select an entry from the timeline on the left.
              </Typography>
            </>
          )}
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
              <Typography type="body2" id="timeline">{ReactHtmlParser(phaseState.summary)}</Typography>
            </>
          )}
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
          {documentState.length > 0 && (
            <>
              <Typography type="body1">Selected Documents</Typography>
              <DocumentContainer>
                {documentState
                  .sort((a, b) => new Date(a.publication_date) - new Date(b.publication_date))
                  .map((doc) => (
                    <Document
                      key={doc.archive_id}
                      id={doc.archive_id}
                      date={doc.publication_date}
                      title={doc.title}
                      author={doc.author}
                      thumbnail={thumbnailUrls[doc.thumbnail]}
                    />
                  ))}
              </DocumentContainer>
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
      const docRes = await fetch(`${process.env.API_URL}/items/documents?sort=phase_id`) // eslint-disable-line no-undef
        .catch((err) => ({
          error: err.message,
        }));
      if (!docRes.error) {
        const documents = await docRes.json();
        const thumbnailUrls = {};
        await Promise.all(documents.data.map(async (doc) => {
          const { thumbnail } = doc;
          const thumbnailUrl = `${process.env.API_URL}/assets/${thumbnail}`;
          thumbnailUrls[doc.thumbnail] = thumbnailUrl;
        }));
        return {
          props: {
            phases, questions, documents, thumbnailUrls,
          },
        };
      }
      return { props: { phases, questions, errors: [docRes.error] } };
    }
    return { props: { phases, errors: [qRes.error] } };
  } return { props: { errors: [res.error] } };
}


export default Timeline;
