import { useEffect, useState } from 'react';
import { Flex, Box } from '@rebass/grid';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Screen from './style';
import Section from '../../../../components/Section';
import PortfolioItem from '../../../../components/PortfolioItem';
import portfolio from './portfolio.json';

const imageSwiperParams = {
  containerClass: 'image-swiper',
  init: false,
  loop: true,
  lazy: {
    loadOnTransitionStart: true,
  },
  watchSlidesVisibility: true,
  loopAdditionalSlides: 3,
  speed: 700,
  slidesPerView: 1.6,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  grabCursor: true,
  parallax: true,
  breakpoints: {
    1023: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const infoSwiperParams = {
  containerClass: 'info-swiper',
  init: false,
  loop: true,
  loopAdditionalSlides: 3,
  speed: 700,
  effect: 'fade',
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },
};

const Portfolio = ({ active }) => {
  const [imageSwiper, setImageSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);
  useEffect(() => {
    if (imageSwiper) imageSwiper.init();
    if (infoSwiper) infoSwiper.init();
    if (imageSwiper && infoSwiper) {
      imageSwiper.controller.control = infoSwiper;
      infoSwiper.controller.control = imageSwiper;
    }
  }, [imageSwiper, infoSwiper]);

  return (
    <Section active={active}>
      <Screen className="screen" flexDirection="column" justifyContent="center">
        <Swiper getSwiper={setImageSwiper} {...imageSwiperParams}>
          {portfolio.map(item => (
            <div className="slide" key={`${item.images.desktop}-${item.images.mobile}`}>
              <PortfolioItem.Image data={item} />
            </div>
          ))}
        </Swiper>
        <Swiper
          getSwiper={setInfoSwiper}
          {...infoSwiperParams}
          renderPrevButton={() => (
            <Flex className="prev" alignItems="center">
              <div className="bx bx-left-arrow" />
              <Box ml="5px" mt="2px">
                PREVIOUS
              </Box>
            </Flex>
          )}
          renderNextButton={() => (
            <Flex className="next" alignItems="center">
              <Box mr="5px" mt="2px">
                NEXT
              </Box>
              <div className="bx bx-right-arrow" />
            </Flex>
          )}
        >
          {portfolio.map(item => (
            <div className="slide" key={item.title}>
              <PortfolioItem.Info data={item} />
            </div>
          ))}
        </Swiper>
      </Screen>
    </Section>
  );
};

export default Portfolio;
