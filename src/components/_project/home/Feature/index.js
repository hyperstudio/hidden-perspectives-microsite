import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

import OuterRow from '../../../Layout/OuterRow';
import { media } from '../../../../lib';

const Wrapper = styled('div')`
	width: 60vw;
	padding: 40px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${space};
	${media.xs`
		width: 80vw;
		padding: 8px;
		padding-top: 4rem;
    margin-bottom: -8rem;
	`};
`;

const VideoWrapper = styled('div')`
	background: white;
	padding-bottom: 62.5%;
	box-shadow: ${(props) => props.theme.shadow[14]};
	position: relative;
`;

const Img = styled('img')`
	width: 100%;
	position: absolute;
`;

const Feature = ({
  padding, image, onClick,
}) => (
  <Wrapper pb={[5, 2]} pt={padding} onClick={onClick}>
    <OuterRow rowWidth="wide" style={{ width: '100%', padding: 0 }}>
      <VideoWrapper>
        <Img src={image} />
      </VideoWrapper>
    </OuterRow>
  </Wrapper>
);

Feature.propTypes = {
  padding: PropTypes.number,
};

Feature.defaultProps = {
  padding: 5,
};

export default Feature;
