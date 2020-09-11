import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { container, media } from '../../../../style/theme';

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
    .swiper-slide {
      height: auto;
    }
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
      outline: none;
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

export default Screen;
