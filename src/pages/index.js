import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
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
  const { errors, blurb } = props;
  return (
    <Wrapper>
      <Errors errors={errors || []} />
      <OuterRow rowWidth="wide">
        <Typography type="h5" mb={(2)} mt={(5)}>
          {blurb && ReactHtmlParser(blurb)}
        </Typography>
      </OuterRow>
      <FeatureWrapper>
        <Features />
      </FeatureWrapper>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/items/landing_page_text`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!res.error) {
    const blurbJson = await res.json();
    const blurb = blurbJson.data.text;
    return { props: { blurb } };
  } return { props: { errors: [res.error] } };
}

export default Index;
