import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
	margin: 0 auto;
	position: relative;
	box-shadow: ${(props) => props.theme.shadow[16]};
	padding-top: ${({ dimensions }) => `${(dimensions[1] / dimensions[0]) * 100}%`};
`;

const Frame = styled('iframe')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
`;

const Vimeo = ({ src, width, height }) => {
  const vidWidth = (width < 1056) ? (width) : (1056);

  return (
    <Wrapper dimensions={[vidWidth, height]}>
      <Frame src={src} webkitallowfullscreen mozallowfullscreen allowfullscreen />
    </Wrapper>
  );
};

Vimeo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Vimeo;
