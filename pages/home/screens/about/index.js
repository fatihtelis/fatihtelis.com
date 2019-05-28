import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { TimelineMax, Power1 } from 'gsap';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Section from '../../../../components/Section';
import AboutItem from '../../../../components/AboutItem';
import about from './about.json';
import { container, media } from '../../../../style/theme';

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
      spaceBetween: 0,
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 20,
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

const Screen = styled(Flex)`
  ${container};
  h2 {
    font-size: 36px;
    text-align: center;
    margin: 0px auto;
    ${media.phone`
      font-size: 24px;
    `};
  }
  .about-swiper {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 30px 0 50px;
    ${media.phone`
      padding: 20px 0 50px;
    `};
    .swiper-pagination {
      left: 50px;
      width: calc(100% - 100px);
      .swiper-pagination-bullet {
        background-color: white;
        border-radius: 4px;
        transition: 0.7s;
        &.swiper-pagination-bullet-active {
          width: 24px;
        }
      }
    }
    .prev,
    .next {
      position: absolute;
      bottom: -5px;
      color: white;
      width: 50px;
      font-size: 48px;
      z-index: 1;
      &.swiper-button-disabled {
        opacity: 0.2;
        pointer-events: none;
        cursor: not-allowed;
      }
    }
    .prev {
      left: -15px;
      text-align: left;
    }
    .next {
      right: -15px;
      text-align: right;
    }
  }
`;

export default About;
