import { useRef, useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Screen from './style';
import Section from '../../../../components/Section';
import AboutItem from '../../../../components/AboutItem';
import about from './about.json';

const params = {
  containerClass: 'about-swiper',
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 700,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    prevEl: '.prev.bx.bx-chevron-left',
    nextEl: '.next.bx.bx-chevron-right',
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    1023: {
      slidesPerView: 2,
    },
  },
};

let animation;

const About = ({ active }) => {
  const items = Array.from({ length: about.length }, () => useRef(null));

  const animate = () => {
    animation = new TimelineMax({ paused: true }).staggerFrom(
      items.map(i => i.current),
      0.4,
      {
        bottom: -400,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 0.4,
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
        <Swiper {...params}>
          {about.map((item, index) => (
            <div className="slide" key={item.text}>
              <AboutItem
                innerRef={items[index]}
                data={item}
                index={index + 1}
                total={about.length}
              />
            </div>
          ))}
        </Swiper>
      </Screen>
    </Section>
  );
};

export default About;
