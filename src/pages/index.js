/* eslint-disable no-undef */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import Errors from '../components/Errors';
import Typography from '../components/Typography';
import OuterRow from '../components/Layout/OuterRow';
// import Feature from '../components/_project/home/Feature'
import Features from '../components/_project/home/Features';
import Footer from '../components/_project/home/Footer';
import Button from '../components/Button';
import Vimeo from '../components/Vimeo';
import { dark } from '../lib/theme';

const Wrapper = styled('div')`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

const HeaderWrapper = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	${space}
`;

const HeaderContainer = styled.header`
	width: 90%;
	height: 7rem;
	top: 0;
	left: 0;
	background: white;
	text-align: right;
	z-index: 3;
	border-bottom: 1px solid rgb(222, 226, 230);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderLink = styled.a`
	border: none;
	background: none;
  font-family: 'Suisse Intl', sans-serif;
	color: black;
	font-size: 1.2rem;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	text-align: left;

	&.active {
		cursor: default;
	}

	&:focus {
		box-shadow: inset 0 0 0 2px #757575;
	}
`;

const LogoContainer = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	padding-left: 1rem;
	padding-right: 1rem;
	flex-basis: 33%;
	flex-shrink: 2;
`;

const Logo = styled(HeaderLink)`
	z-index: 1;
`;

const LogoH2 = styled(HeaderLink)`
	text-align: left;
	font-size: 0.8rem;
`;

const FeatureWrapper = styled('div')`
	width: 100%;
`;

const ButtonWrapper = styled('div')`
	width: 100%;
	display: inline-flex;
	justify-content: flex-end;
	align-items: center;
`;

const Index = (props) => {
  const { contributors, photoUrls, errors } = props;
  return (
      <Wrapper>
        <Errors errors={errors || []} />
        <HeaderContainer>
          <LogoContainer>
            <Logo to="/">US-Iran Relations</Logo>
            <LogoH2 to="/">National Narratives, America, Iran, and the Clash of Civilizations</LogoH2>
          </LogoContainer>
          <LogoContainer>
            <ButtonWrapper>
              <Button href="https://irus.vercel.app/">
                <Typography color="typoAccent" type="button">
                  Launch Application
                  {' '}
                </Typography>
              </Button>
            </ButtonWrapper>
          </LogoContainer>
        </HeaderContainer>
        <HeaderWrapper>
          <OuterRow rowWidth="wide">
            <Typography type="h5">
              US-Iran Relations is an interactive digital archive consisting of
              documents and events relating to the U.S.-Iran relationship’s history since
              the 1978&ndash;1979 Iranian revolution.
            </Typography>
          </OuterRow>
        </HeaderWrapper>
        <FeatureWrapper>
          <Features />
        </FeatureWrapper>
        <OuterRow rowWidth="narrow">
          <Typography type="h4" id="about">About</Typography>
          <Typography type="body1">
            The U.S.-Iran relationship has long been staggered by each nation&apos;s misconceptions
            about the other. Missed opportunities for improvement rose not merely from bad
            luck, but from knowing too little vital information about the other. Forty years
            after the Iranian revolution, we still have much to learn about this complex
            relationship.
          </Typography>

          <Typography type="body1">
            To address this knowledge gap, John Tirman, Malcolm Byrne, and Hussein Banai have
            approached this topic in a novel way. They conducted several
            {' '}
            <i>
              critical
              oral history
            </i>
            {' '}
            conferences bringing together policymakers from several
            countries. Most participants were from Iran and the United States.
            Others involved in negotiations from Britain, France, and Italy also contributed.
            In various sessions, they interviewed key players and drew from contemporary
            scholarship to identify hidden perspectives and missed opportunities.
          </Typography>

          <Typography type="body1">
            As a basis for the conversation, they provided a collection of documents
            procured through Freedom of Information Act requests and open-source documents,
            such as published interviews, analyses, memoirs, and more, including transcripts
            of the critical oral history conferences. This archive of documents is the bulk
            of what is now accessible on this platform, which is accessible to other scholars
            and the public. It creates a framework to explore the material&mdash;much of it
            available publicly for the first time&mdash;and deep dives into specific historical
            events.
          </Typography>

          <Typography type="body1">
            The project team set out to create a single, inclusive narrative of the relationship.
            The documents, film, and photography all contribute to understanding the U.S.-Iran
            confrontation as a single story with multiple perspectives. At the same time, we came
            to realize that each country was approaching the relationship constrained by their
            own national narrative, their story about their nation-state, and that these
            narratives clash in significant ways.  Narratives are not “hidden” but they are so
            woven into the fabric of society and culture that they are not always recognized as
            such.
          </Typography>

          <Typography type="body1">
            However one defines the confrontation&mdash;whether a clash of geostrategic interests,
            a succumbing to domestic spoilers, or a struggle of resistance to hegemony&mdash;the
            resources on this platform should be of immense value to policy professionals,
            journalists, students, and scholars.
          </Typography>

          <Typography type="h4">The Digital Archive</Typography>

          <Typography type="body1">
            The digital archive consists of hundreds of documents, dating from 1971 to 2012. They
            are summarized and enhanced with additional metadata. A thousand event entries ranging
            from 1975 to 1999 extend the dataset.
          </Typography>
          <Typography type="body1">
            We made connections between documents and events to uncover patterns within the archive.
            We also used a process called
            {' '}
            <i>named entity extraction</i>
            {' '}
            to identify protagonists involved
            in the dataset. While the dataset might contain human biases and automation mistakes,
            it serves as an initial foundation for further investigation and will be updated and
            expanded regularly. We welcome suggestions, annotations, and additional archival material.
          </Typography>
        </OuterRow>
        <ThemeProvider theme={dark}>
          {!errors && (
            <Footer contributors={contributors} photoUrls={photoUrls} />
          )}
        </ThemeProvider>
      </Wrapper>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/items/contributors`)
    .catch((err) => ({
      error: err.message,
    }));
  if (!res.error) {
    const contributors = await res.json();
    const photoUrls = {};
    await Promise.all(contributors.data.map(async (contributor) => {
      const { photo } = contributor;
      const photoRes = photo
        ? await fetch(`${process.env.API_URL}/files/${photo}`)
        : await fetch(`${process.env.API_URL}/files/11`);
      const { data } = await photoRes.json();
      const photoUrl = `${process.env.API_URL}/assets/${data.private_hash}`;
      photoUrls[contributor.photo] = photoUrl;
    }));
    return {
      props: { contributors, photoUrls },
    };
  } return { props: { errors: [res.error] } };
}

export default Index;
