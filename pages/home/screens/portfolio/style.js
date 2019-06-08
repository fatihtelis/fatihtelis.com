import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { container, media } from '../../../../style/theme';

const Screen = styled(Flex)`
  ${container};
  .image-swiper,
  .info-swiper {
    overflow: hidden;
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
      outline: none;
      .bx {
        font-size: 12px;
      }
    }
    .prev {
      left: 18.75%;
      ${media.tablet`
          left: 0;
        `};
    }
    .next {
      right: 18.75%;
      ${media.tablet`
          right: 0;
        `};
    }
  }
`;

export default Screen;
