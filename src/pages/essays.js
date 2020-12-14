import React from 'react';
import styled from 'styled-components';
import Errors from '../components/Errors';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 7rem - 5rem - 64px - 46.5px);
`;

const Essays = (props) => {
  const { errors } = props;
  return (
    <Wrapper>
      <Errors errors={errors || []} />
    </Wrapper>
  );
};

export default Essays;
