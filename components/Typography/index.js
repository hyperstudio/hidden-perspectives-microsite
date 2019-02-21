import React from 'react'
import PropTypes from 'prop-types'

const variantMapping = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	subtitle1: 'h6',
	subtitle2: 'h6',
	body1: 'p',
	body2: 'p',
}

const Typography = ({ type }) => {}

Typography.defaultProps = {
	type: 'body1',
	align: 'left',
}

Typography.propTypes = {
	type: PropTypes.oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'subtitle1',
		'subtitle2',
		'body1',
		'body2',
		'caption',
		'button',
		'overline',
		'srOnly',
		'inherit',
	]),
	align: PropTypes.oneOf(['left', 'center', 'right', 'inherit']),
}
