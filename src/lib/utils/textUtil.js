import { convertNodeToElement } from 'react-html-parser';
import Typography from '../../components/Typography';

export const transformText = (node, index) => {
  const { children, type, name } = node;
  if (type === 'tag' && name === 'h4') {
    return <Typography type="h4">{children.map((child) => convertNodeToElement(child, index, transformText))}</Typography>;
  } if (type === 'tag' && name === 'p') {
    return <Typography type="body1">{children.map((child) => convertNodeToElement(child, index, transformText))}</Typography>;
  }
  return undefined;
};
