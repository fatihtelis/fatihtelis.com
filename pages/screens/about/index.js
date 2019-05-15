import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { TimelineMax, Power1 } from 'gsap';
import AboutItem from '../../../components/AboutItem';
import about from './about.json';
import { container, cover } from '../../../style/theme';

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
    <Outer active={active}>
      <Flex className="screen" flexDirection="column" alignItems="center">
        <h2>Who Am I?</h2>
        <Flex className="about" flexWrap="wrap">
          {about.map((item, index) => (
            <AboutItem innerRef={items[index]} data={item} key={item.text} />
          ))}
        </Flex>
      </Flex>
    </Outer>
  );
};

const Outer = styled(Flex).attrs({ as: 'section' })`
  ${cover()};
  opacity: ${props => (props.active ? '1' : '0')};
  pointer-events: ${props => (props.active ? 'visible' : 'none')};
  transition: ${props => (props.active ? '1s 0.4s' : '0.1s')};
  color: white;
  .screen {
    ${container};
    padding: 40px 0;
    h2 {
      font-size: 36px;
      text-align: center;
      margin: 0px auto 40px;
    }
    .about {
      position: relative;
      width: 100%;
      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: calc(100% + 40px);
        left: 50%;
        border-left: 1px dashed white;
      }
      .about-item {
        width: calc(50% - 40px);
        position: relative;
        opacity: 0;
        bottom: -100px;
        &:nth-child(2n) {
          margin: 100px 0 0 40px;
          &:before {
            content: '';
            position: absolute;
            right: 100%;
            top: 50%;
            width: 32px;
            height: 1px;
            background-color: white;
          }
          &::after {
            content: '';
            position: absolute;
            left: -40px;
            top: 50%;
            width: 16px;
            height: 16px;
            background-color: white;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
        }
        &:nth-child(2n + 1) {
          margin: 0 40px 0 0;
          &:before {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            width: 32px;
            height: 1px;
            background-color: white;
          }
          &::after {
            content: '';
            position: absolute;
            right: -40px;
            top: 50%;
            width: 16px;
            height: 16px;
            background-color: white;
            border-radius: 50%;
            transform: translate(50%, -50%);
          }
        }
      }
    }
  }
`;

export default About;
