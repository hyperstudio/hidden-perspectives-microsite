import React from 'react'
import PropTypes from 'prop-types'

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

export const students = alphabeticalSort(data.filter(person => person.role), 'name')

console.log(students)
export const initiators = alphabeticalSort(
	data.filter(person => person.organization.includes('MIT')),
	'name'
)

const Persons = ({ persons }) => {
	return persons.map(person => {
		return <Person {...person} />
	})
}

export default Persons
