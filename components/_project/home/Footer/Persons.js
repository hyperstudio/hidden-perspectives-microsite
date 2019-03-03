import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Person from './Person'
import data from './data'

const alphabeticalSort = (arr, sortBy) => {
	return arr.sort((a, b) => {
		if (a[sortBy] < b[sortBy]) {
			return -1
		}
		if (a[sortBy] > b[sortBy]) {
			return 1
		}
		return 0
	})
}

export const students = alphabeticalSort(data.filter(person => person.role !== 'initiator'), 'name')

export const initiators = alphabeticalSort(
	data.filter(person => person.role === 'initiator'),
	'name'
)

const Wrapper = styled('div')``

const Persons = ({ persons }) => {
	return (
		<Wrapper>
			{persons.map(person => {
				return <Person {...person} key={person.name} />
			})}
		</Wrapper>
	)
}

export default Persons
