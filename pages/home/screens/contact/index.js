import { useEffect, useRef } from 'react';
import { Flex } from '@rebass/grid';
import { TimelineMax, Elastic } from 'gsap';
import Screen from './style';
import Section from '../../../../components/Section';
import contact from './contact.json';

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
    <Section active={active}>
      <Screen flexDirection="column" alignItems="center">
        <h2>You can contact with me from...</h2>
        <Flex justifyContent="center" alignItems="center">
          {contact.map((item, index) => (
            <a
              ref={icons[index]}
              href={item.link}
              key={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
            >
              <i className={`bx ${item.icon}`} />
            </a>
          ))}
        </Flex>
      </Screen>
    </Section>
  );
};

export default Contact;
