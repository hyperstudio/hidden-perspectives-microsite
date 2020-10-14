import React from 'react';
import styled from 'styled-components';

import Person from './Person';

const Wrapper = styled('div')``;

const Persons = ({ persons, photoUrls }) => (
  <Wrapper>
    {persons.map((person) => (
      <Person {...person} key={person.name} photo={photoUrls[person.photo]} />
    ))}
  </Wrapper>
);

export default Persons;
