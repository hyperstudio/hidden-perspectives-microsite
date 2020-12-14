import React from 'react';
import styled from 'styled-components';
import Errors from '../components/Errors';
import Typography from '../components/Typography';
import OuterRow from '../components/Layout/OuterRow';
import Features from '../components/_project/home/Features';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const FeatureWrapper = styled('div')`
	width: 100%;
`;

const Index = (props) => {
  const { errors } = props;
  return (
    <Wrapper>
      <Errors errors={errors || []} />
      <OuterRow rowWidth="wide">
        <Typography type="h5" mb={(2)} mt={(5)}>
          US-Iran Relations is an interactive digital archive consisting of
          documents and events relating to the U.S.-Iran relationship’s history since
          the 1978&ndash;1979 Iranian revolution.
        </Typography>
      </OuterRow>
      <FeatureWrapper>
        <Features />
      </FeatureWrapper>
    </Wrapper>
  );
};

export default Index;
