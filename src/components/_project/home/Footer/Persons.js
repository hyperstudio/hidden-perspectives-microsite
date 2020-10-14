import React from 'react';
import styled from 'styled-components';

import Person from './Person';

const Wrapper = styled('div')``;

const Persons = ({ persons }) => (
  <Wrapper>
    {persons.map((person) => <Person {...person} key={person.name} />)}
  </Wrapper>
);

export default Persons;
