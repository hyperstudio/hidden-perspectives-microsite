import styled from 'styled-components';
import Typography from '../Typography';

const Document = ({
  id, date, title, author, thumbnail,
}) => {
  const DocLink = styled('a')`
    text-decoration: none;
    color: #505050;
    &:hover {
      color: black;
    }
    transition: ${(props) => props.theme.animation.create()};
    > * {
    transition: ${(props) => props.theme.animation.create()};
    }
    &:hover > * {
      color: black;
    }
    &:hover [class*="DocTitle"] {
      background-color: rgb(255, 209, 139);
      color: rgb(143, 75, 0);
    }
    &:hover [class*="DocAuthor"] {
      background-color: rgb(255, 209, 139);
      color: rgb(143, 75, 0);
    }

    &:hover [class*="DocImage"] {
      border: 1px solid #999999;
    }
  `;
  const DocCard = styled('div')`
    width: 125px;
    margin: 0 1rem 1rem 0;
    transition: ${(props) => props.theme.animation.create()};
    > * {
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
  const DocTitle = styled(Typography)`
    color: #505050;
    &:hover { color: rgb(143, 75, 0); }
    margin-top: 0.5rem;
    padding-top: 0;
    padding-bottom: 0.05rem;
    line-height: 1.5;
    font-size: 0.85rem;
    letter-spacing: 0.35px;
  `;
  const DocAuthor = styled(Typography)`
    color: #505050;
    display: inline-block;
    margin-top: auto;
    margin-bottom: 0;
    line-height: 1.2;
    font-size: 0.75rem;
    letter-spacing: 0.35px;
  `;

  return (
    <DocLink
      href={`${process.env.NEXT_PUBLIC_ARCHIVE_URL}/document/context/${id}`}
    >
      <DocDate>{date}</DocDate>
      <DocCard>
        <DocImage img={thumbnail} />
        <DocTitle>{title}</DocTitle>
        <DocAuthor>{author}</DocAuthor>
      </DocCard>
    </DocLink>
  );
};

export default Document;
