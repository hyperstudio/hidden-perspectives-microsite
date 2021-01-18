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
  const {
    errors, blurb, featureData, imageUrls,
  } = props;
  return (
    <Wrapper>
      <Errors errors={errors || []} />
      <OuterRow rowWidth="wide">
        <Typography type="h5" mb={(2)} mt={(5)}>
          {blurb && ReactHtmlParser(blurb)}
        </Typography>
      </OuterRow>
      <FeatureWrapper>
        <Features
          featureData={featureData.sort((a, b) => a.order - b.order)}
          imageUrls={imageUrls}
        />
      </FeatureWrapper>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const blurbRes = await fetch(`${process.env.API_URL}/items/landing_page_text`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!blurbRes.error) {
    const blurbJson = await blurbRes.json();
    const blurb = blurbJson.data.text;
    const carouselRes = await fetch(`${process.env.API_URL}/items/carousel_slides`) // eslint-disable-line no-undef
      .catch((err) => ({
        error: err.message,
      }));
    if (!carouselRes.error) {
      const carouselJson = await carouselRes.json();
      const featureData = carouselJson.data;
      const imageUrls = {};
      await Promise.all(featureData.map(async (slide) => {
        const { image } = slide;
        const photoUrl = `${process.env.API_URL}/assets/${image}`;
        imageUrls[slide.image] = photoUrl;
      }));
      return { props: { blurb, featureData, imageUrls } };
    } return { props: { blurb, errors: [carouselRes.error] } };
  } return { props: { errors: [blurbRes.error] } };
}

export default Index;
