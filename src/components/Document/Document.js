import styled from 'styled-components';
import Typography from '../Typography';

const Document = ({
  id, date, title, author, thumbnail,
}) => {
  const DocLink = styled('a')`
    margin-top: 0.5rem;
    text-decoration: none;
    color: #505050;
    &:hover {
      color: black;
    }
    transition: ${(props) => props.theme.animation.create()};
    > * {
    transition: ${(props) => props.theme.animation.create()};
    }
    &:hover * {
      color: black;
    }
    &:hover [class*="DocTitle"] {
      background-color: rgb(255, 209, 139);
      color: rgb(143, 75, 0);
      box-shadow: -5px 0 0 rgb(255, 209, 139), 5px 0 0 rgb(255, 209, 139);
    }
    &:hover [class*="DocAuthor"] {
      background-color: rgb(255, 209, 139);
      color: rgb(143, 75, 0);
      box-shadow: -5px 0 0 rgb(255, 209, 139), 5px 0 0 rgb(255, 209, 139);
    }

    &:hover [class*="DocImage"] {
      border: 1px solid #999999;
    }
  `;
  const DocCard = styled('div')`
    width: 125px;
    margin: 0 1rem 1rem 0;
    transition: ${(props) => props.theme.animation.create()};
    * {
    transition: ${(props) => props.theme.animation.create()};
    }
  `;
  const DocImage = styled('div')`
    padding: 0.5rem;
    background-image: url(${({ img }) => img});
    border-radius: 4px;
    border: 1px solid #ddd;
    &:hover { border: 1px solid #999999; }
    height: 120px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  `;
  const DocDate = styled(Typography)`
    color: #505050;
    margin-top: 0;
    margin-bottom: 0.25rem;
    line-height: 1;
    font-size: 0.75rem;
    letter-spacing: 0.35px;
  `;
  const DocTitle = styled('span')`
	  font-family: 'Suisse Intl';
    color: #505050;
    &:hover { color: rgb(143, 75, 0); }
    padding-top: 0.1rem;
    padding-bottom: 0.3rem;
    line-height: 1.5;
    font-size: 0.85rem;
    letter-spacing: 0.35px;
    box-shadow: -5px 0 0 white, 5px 0 0 white;
  `;
  const DocAuthor = styled('span')`
    font-family: 'Suisse Intl';
    color: #505050;
    margin-top: auto;
    margin-bottom: 0;
    padding-top: 0.1rem;
    padding-bottom: 0.2rem;
    line-height: 1.5;
    font-size: 0.75rem;
    letter-spacing: 0.35px;
    box-shadow: -5px 0 0 white, 5px 0 0 white;
  `;
  const TitleDiv = styled('div')`
    margin: 0.7rem 0 0.5rem 0;
  `;

  return (
    <DocLink
      href={`${process.env.NEXT_PUBLIC_ARCHIVE_URL}/document/context/${id}`}
    >
      <DocDate>{date}</DocDate>
      <DocCard>
        <DocImage img={thumbnail} />
        <TitleDiv>
          <DocTitle>{title}</DocTitle>
        </TitleDiv>
        <DocAuthor>{author}</DocAuthor>
      </DocCard>
    </DocLink>
  );
};

export default Document;
