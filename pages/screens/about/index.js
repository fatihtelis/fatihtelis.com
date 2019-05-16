import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { TimelineMax, Power1 } from 'gsap';
import Section from '../../../components/Section';
import AboutItem from '../../../components/AboutItem';
import about from './about.json';
import { container, media } from '../../../style/theme';

let animation;
const About = ({ active }) => {
  const items = Array.from({ length: about.length }, () => useRef(null));
  const animate = () => {
    animation = new TimelineMax({ paused: true }).staggerTo(
      items.map(i => i.current),
      0.3,
      {
        opacity: 1,
        bottom: 0,
        ease: Power1.easeInOut,
        delay: 0.5,
      },
      0.05,
    );
  };

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    if (active) {
      animation.play().timeScale(1);
    } else {
      animation.reverse().timeScale(10);
    }
  }, [active]);

  return (
    <Section active={active}>
      <Screen flexDirection="column" alignItems="center">
        <h2>Who Am I?</h2>
        <Flex className="about" flexWrap="wrap">
          {about.map((item, index) => (
            <AboutItem innerRef={items[index]} data={item} key={item.text} />
          ))}
        </Flex>
      </Screen>
    </Section>
  );
};

const Screen = styled(Flex)`
  ${container};
  h2 {
    font-size: 36px;
    text-align: center;
    margin: 0px auto 40px;
    ${media.tablet`
        margin: 0px auto 20px;
      `};
  }
  .about {
    position: relative;
    width: 100%;
    max-width: 1000px;
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: calc(100% + 40px);
      left: 50%;
      border-left: 1px dashed white;
      ${media.tablet`
          left: 0;
        `};
    }
    .about-item {
      width: calc(50% - 40px);
      position: relative;
      opacity: 0;
      bottom: -100px;
      ${media.tablet`
          width: 100%;
        `};
      &:nth-child(2n) {
        margin: 100px 0 0 40px;
        ${media.tablet`
            margin: 20px 0 0 20px;
          `};
        &:before {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          width: 35px;
          height: 1px;
          background-color: white;
          ${media.tablet`
              width: 15px;
            `};
        }
        &::after {
          content: '';
          position: absolute;
          left: -40px;
          top: 50%;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          ${media.tablet`
              left: -20px;
            `};
        }
      }
      &:nth-child(2n + 1) {
        margin: 0 40px 0 0;
        ${media.tablet`
            margin: 20px 0 0 20px;
          `};
        &:before {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          width: 35px;
          height: 1px;
          background-color: white;
          ${media.tablet`
              width: 15px;
              right: 100%;
              left: unset;
            `};
        }
        &::after {
          content: '';
          position: absolute;
          right: -40px;
          top: 50%;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          transform: translate(50%, -50%);
          ${media.tablet`
              left: -30px;
              right: unset;
            `};
        }
      }
    }
  }
`;

export default About;
