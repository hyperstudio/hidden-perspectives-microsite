import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'
import Feature from '../Feature'

import featureData from './data'

const sliderSettings = {
	dots: true,
	centerMode: true,
	infinite: true,
	slidesToShow: 1,
	speed: 500,
	variableWidth: true,
	className: 'react-slick-active-class',
	autoplay: true,
	autoplaySpeed: 4000,
}

const Features = ({ features = featureData }) => {
	return (
		<Slider {...sliderSettings}>
			{features.map(feature => {
				return <Feature {...feature} />
			})}
		</Slider>
	)
}

export default Features
