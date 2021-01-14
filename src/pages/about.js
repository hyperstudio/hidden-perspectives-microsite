import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import OuterRow from '../components/Layout/OuterRow';
import Typography from '../components/Typography';
import Errors from '../components/Errors';
import Team from '../components/Team';

const transformAboutText = (node, index) => {
  const { children, type, name } = node;
  if (type === 'tag' && name === 'h4') {
    return <Typography type="h4">{children.map((child) => convertNodeToElement(child, index, transformAboutText))}</Typography>;
  } if (type === 'tag' && name === 'p') {
    return <Typography type="body1">{children.map((child) => convertNodeToElement(child, index, transformAboutText))}</Typography>;
  }
  return undefined;
};

const About = (props) => {
  const {
    contributors, photoUrls, errors, aboutData,
  } = props;
  return (
    <>
      <Errors errors={errors || []} />
      <OuterRow rowWidth="narrow">
        {aboutData && ReactHtmlParser(aboutData, { transform: transformAboutText })}
      </OuterRow>
      <Team contributors={contributors} photoUrls={photoUrls} />
    </>
  );
};

export async function getStaticProps() {
  const aboutRes = await fetch(`${process.env.API_URL}/items/about_page`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!aboutRes.error) {
    const aboutJson = await aboutRes.json();
    const aboutData = aboutJson.data.text;
    const res = await fetch(`${process.env.API_URL}/items/contributors`) // eslint-disable-line no-undef
      .catch((err) => ({
        error: err.message,
      }));
    if (!res.error) {
      const contributors = await res.json();
      const photoUrls = {};
      await Promise.all(contributors.data.map(async (contributor) => {
        const { photo } = contributor;
        const photoUrl = `${process.env.API_URL}/assets/${photo}`;
        photoUrls[contributor.photo] = photoUrl;
      }));
      return {
        props: { aboutData, contributors, photoUrls },
      };
    } return { props: { errors: [res.error] } };
  } return { props: { errors: [aboutRes.error] } };
}

export default About;
