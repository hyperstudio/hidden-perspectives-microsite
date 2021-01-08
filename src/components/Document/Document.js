import styled from 'styled-components';
import Typography from '../Typography';

const Document = ({
  id, date, title, author, thumbnail,
}) => {
  const DocLink = styled('a')`
    text-decoration: none;
    color: black;
    &:hover {
      color: gray;
    }
    transition: ${(props) => props.theme.animation.create()};
    > * {
    transition: ${(props) => props.theme.animation.create()};
    }
    &:hover > * {
      color: gray;
    }
  `;
  const DocCard = styled('div')`
    height: 190px;
    width: 125px;
    padding: 0.5rem;
    margin: 0 0.5rem 1rem 0;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid rgb(133, 136, 139);
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    transition: ${(props) => props.theme.animation.create()};
    > * {
    transition: ${(props) => props.theme.animation.create()};
    }
    &:hover > * {
      color: gray;
    }
  `;
  const DocDate = styled(Typography)`
    margin-top: 0;
    margin-bottom: 0.25rem;
    line-height: 1;
    font-size: 0.75rem;
    letter-spacing: 0.35px;
  `;
  const DocTitle = styled(Typography)`
    margin-top: 0;
    background-color: rgba(255,255,255,0.9);
    padding-top: 0;
    padding-bottom: 0.05rem;
    line-height: 1.5;
    font-size: 0.85rem;
    letter-spacing: 0.35px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  `;
  const DocAuthor = styled(Typography)`
    margin-top: auto;
    margin-bottom: 0;
    line-height: 1;
    font-size: 0.75rem;
    letter-spacing: 0.35px;
  `;

  return (
    <DocLink
      href={`${process.env.NEXT_PUBLIC_ARCHIVE_URL}/document/context/${id}`}
    >
      <DocDate>{date}</DocDate>
      <DocCard img={thumbnail}>
        <DocTitle>{title}</DocTitle>
        <DocAuthor>{author}</DocAuthor>
      </DocCard>
    </DocLink>
  );
};

export default Document;
