import React, { useState } from 'react'
import Slider from 'react-slick'
import Feature from '../Feature'
import Typography from '../../../Typography'
import OuterRow from '../../../Layout/OuterRow'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

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

const FeatureTextWrapper = styled(animated.div)`
	height: 60px;
	display: flex;
	flex-direction: row;
`

const FeatureText = ({ header, label }) => {
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0, color: 'red' },
	})

	return (
		<FeatureTextWrapper style={props}>
			<Typography
				style={{
					maxWidth: '110px',
					minWidth: '110px',
					marginRight: '60px',
					opacity: 0.5,
				}}
			>
				{header}
			</Typography>
			<Typography>{label}</Typography>
		</FeatureTextWrapper>
	)
}

const Features = ({ features = featureData }) => {
	const [count, setCount] = useState(0)

	return [
		<OuterRow key="description" style={{ margin: '0 auto' }}>
			<Typography type="h2" pt={5}>
				The Application
			</Typography>
			<FeatureText {...features[count]} />
		</OuterRow>,
		<Slider key="slider" {...sliderSettings} afterChange={index => setCount(index)}>
			{features.map(feature => {
				return <Feature {...feature} />
			})}
		</Slider>,
	]
}

export default Features
