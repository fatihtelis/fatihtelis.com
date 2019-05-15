import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { TimelineMax, Elastic } from 'gsap';
import contact from './contact.json';
import { container, cover } from '../../../style/theme';

let animation;
const Contact = ({ active }) => {
  const icons = Array.from({ length: contact.length }, () => useRef(null));
  const animate = () => {
    animation = new TimelineMax({ paused: true }).staggerTo(
      icons.map(i => i.current),
      1,
      {
        top: 0,
        opacity: 1,
        ease: Elastic.easeOut,
        delay: 0.6,
      },
      0.25,
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
        <h2>You can contact with me from...</h2>
        <Flex justifyContent="center" alignItems="center">
          {contact.map((item, index) => (
            <a
              ref={icons[index]}
              href={item.link}
              key={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bx ${item.icon}`} />
            </a>
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
      font-weight: 700;
      margin-bottom: 15px;
      width: 100%;
      text-align: center;
    }
    a {
      position: relative;
      top: 40px;
      opacity: 0;
      font-size: 36px;
      color: white;
      margin: 0 10px;
    }
  }
`;

export default Contact;
