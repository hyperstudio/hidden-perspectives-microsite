import React from 'react';
import styled from 'styled-components';
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
`;
const RightColumn = styled('div')`
  flex-basis: 66%;
`;

const Timeline = (props) => {
  const { errors, phases } = props;
  const { data } = phases;
  return (
    <Wrapper>
      <Errors errors={errors || []} />
      <Header rowWidth="wide">
        <Typography type="h4" id="timeline">Timeline</Typography>
      </Header>
      <TwoColumn rowWidth="wide">
        <LeftColumn>
          {data.map((phase) => (
            <div key={phase.id}>{phase.name}</div>
          ))}
        </LeftColumn>
        <RightColumn>
          Right column
        </RightColumn>
      </TwoColumn>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/items/phases`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!res.error) {
    const phases = await res.json();
    return { props: { phases } };
  } return { props: { errors: [res.error] } };
}


export default Timeline;
