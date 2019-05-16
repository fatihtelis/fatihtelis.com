import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import PortfolioItem from '../../../components/PortfolioItem';
import portfolio from './portfolio.json';
import { container, cover } from '../../../style/theme';

const imageSwiperParams = {
  containerClass: 'image-swiper',
  init: false,
  loop: true,
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
  const [imageSwiper, updateImageSwiper] = useState(null);
  const [infoSwiper, updateInfoSwiper] = useState(null);
  useEffect(() => {
    if (imageSwiper) imageSwiper.init();
    if (infoSwiper) infoSwiper.init();
    if (imageSwiper && infoSwiper) {
      imageSwiper.controller.control = infoSwiper;
      infoSwiper.controller.control = imageSwiper;
    }
  }, [imageSwiper, infoSwiper]);

  return (
    <Outer active={active}>
      <Flex className="screen" flexDirection="column" justifyContent="center">
        <Swiper getSwiper={updateImageSwiper} {...imageSwiperParams}>
          {portfolio.map(item => (
            <div className="slide" key={`${item.images.desktop}-${item.images.mobile}`}>
              <PortfolioItem.Image data={item} />
            </div>
          ))}
        </Swiper>
        <Swiper
          getSwiper={updateInfoSwiper}
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
    .image-swiper,
    .info-swiper {
      overflow: hidden;
    }
    .image-swiper {
      margin-top: 40px;
    }
    .info-swiper {
      padding-bottom: 50px;
      position: relative;
      .prev,
      .next {
        position: absolute;
        bottom: 20px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 2px;
        font-weight: 300;
        cursor: pointer;
        .bx {
          font-size: 12px;
        }
      }
      .prev {
        left: 18.75%;
      }
      .next {
        right: 18.75%;
      }
    }
  }
`;

export default Portfolio;
