import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Feature from '../Feature';
import Typography from '../../../Typography';
import OuterRow from '../../../Layout/OuterRow';
import { media } from '../../../../lib';

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
  pauseOnHover: false,
};

const FeatureTextWrapper = styled(animated.div)`
	height: 60px;
	display: flex;
	flex-direction: row;
  margin-top: 1rem;
	${media.xs`
		flex-direction: column;
		> * {
			margin: 0;
		}
	`}
`;

const SliderWrapper = styled('div')`
	width: 100vw;
`;

const FeatureText = ({ title, description }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0, color: 'red' },
  });

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
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </FeatureTextWrapper>
  );
};

const Features = ({ featureData, imageUrls }) => {
  const features = featureData;
  const [count, setCount] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  const handleFeatureClick = (index, activeIndex) => {
    // if the feature is on the right side
    if (index > activeIndex || (index === 0 && activeIndex > 1)) {
      nextSlide();
      // if the feature is on the left side
    } else {
      prevSlide();
    }
  };

  return [
    <SliderWrapper key="slider">
      <Slider {...sliderSettings} afterChange={(index) => setCount(index)} ref={sliderRef}>
        {features.map((feature, index) => (
          <Feature
            {...feature}
            key={feature.id}
            featureId={feature.id}
            active={index === count}
            image={imageUrls[feature.image]}
            onClick={() => handleFeatureClick(index, count)}
          />
        ))}
      </Slider>
    </SliderWrapper>,
    <OuterRow key="description" style={{ margin: '0 auto' }}>
      <FeatureText {...features[count]} />
    </OuterRow>,
  ];
};

export default Features;
