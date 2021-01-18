import React from 'react';
import styled from 'styled-components';
import OuterRow from '../components/Layout/OuterRow';
import Typography from '../components/Typography';
import Errors from '../components/Errors';
import Document from '../components/Document';

const Wrapper = styled(OuterRow)`
  min-height: calc(100vh - 7rem - 5rem - 64px - 46.5px);
`;

const EssayContainer = styled('div')`
  display: grid; 
  grid-template-columns: repeat( auto-fit, minmax(130px, 1fr) );
`;


const Essays = (props) => {
  const { errors, essays, thumbnailUrls } = props;
  return (
    <Wrapper rowWidth="wide">
      <Errors errors={errors || []} />
      <Typography type="h4" id="essays">Essays</Typography>
      <Typography type="body1">
        The following academic essays provide contextual analysis of
        the events and materials represented in the archive.
      </Typography>
      <EssayContainer>
        {essays
          .map((doc) => (
            <Document
              key={doc.archive_id}
              id={doc.archive_id}
              type="essay"
              date={doc.publication_date}
              title={doc.title}
              author={doc.author}
              thumbnail={thumbnailUrls[doc.thumbnail]}
            />
          ))}
      </EssayContainer>

    </Wrapper>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/items/essays?sort=-publication_date`) // eslint-disable-line no-undef
    .catch((err) => ({
      error: err.message,
    }));
  if (!res.error) {
    const essayResults = await res.json();
    const thumbnailUrls = {};
    await Promise.all(essayResults.data.map(async (doc) => {
      const { thumbnail } = doc;
      const thumbnailUrl = `${process.env.API_URL}/assets/${thumbnail}`;
      thumbnailUrls[doc.thumbnail] = thumbnailUrl;
    }));
    return {
      props: {
        essays: essayResults.data,
        thumbnailUrls,
      },
    };
  } return { props: { errors: [res.error] } };
}

export default Essays;
