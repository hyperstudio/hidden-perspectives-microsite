import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Typography from '../Typography';

const Headline = styled(Typography)`
	line-height: 1.5rem;
`;

const Container = styled.div`
	width: 28rem;
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	color: ${({ theme }) => theme.color.danger};
	background: ${({ theme }) => lighten(0.53, theme.color.danger)};
	border: 1px solid ${({ theme }) => lighten(0.45, theme.color.danger)};
	padding: 2rem;
	z-index: 1;
	border-radius: .25rem;
	font-size: 1rem;
	line-height: 1.4rem;
	box-shadow: 0 .5rem 1rem -.25rem rgba(0,0,0,.1);
	text-align: left;
`;

const CloseButton = styled.span`
	position: absolute;
	top: 2rem;
	right: 2rem;
	cursor: pointer;
	opacity: 1;
	transition: opacity 200ms ease-out;

	&:hover {
		opacity: .6;
	}
`;

const Title = styled(Headline)`

`;

const ErrorEl = styled.div`
	padding-top: 1rem;
	border-top: 1px solid ${({ theme }) => lighten(0.45, theme.color.danger)};

	& > p {
		margin-top: 0;
		margin-bottom: 0.5rem;
	}
`;

const getErrorTitle = (errors) => {
  if (errors.length === 1) return 'An unexpected error has occurred';
  return `${errors.length} unexpected errors have occurred`;
};

const Errors = ({ errors }) => {
  const [isOpened, setIsOpened] = useState(true);
  const onClose = () => setIsOpened(false);

  return (errors.length > 0 && isOpened ? (
    <Container>
      <CloseButton onClick={onClose}>✕</CloseButton>
      <Title variant="h5">{getErrorTitle(errors)}</Title>
      {errors.map((error) => (
        <ErrorEl key={error}>
          {error.split('\n').map((errorLine) => (
            <p key={errorLine}>{errorLine}</p>
          ))}
        </ErrorEl>
      ))}
    </Container>
  ) : null);
};

export default Errors;
