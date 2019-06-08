import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { colors, media } from '../../style/theme';

const ImageBg = styled.div`
  width: 100%;
  padding-top: 50%;
  background-position: center;
  background-repeat: no-no-repeat;
  background-size: cover;
  background-color: black;
  &.desktop {
    ${media.phone`
      display:none;
    `};
  }
  &.mobile {
    display: none;
    ${media.phone`
      display: block;
    `};
  }
`;

const Info = styled(Flex)`
  width: 62.5%;
  height: 300px;
  margin: 0 auto;
  background-color: white;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: 30px;
  color: ${colors.font};
  border-top: 1px solid #eee;
  ${media.tablet`
    width: 100%;
  `}
  ${media.phone`
    height: 225px;
    padding: 20px;
  `};
  @media (min-width: 768px) and (max-height: 900px) {
    height: 150px;
    padding: 20px;
  }
  .project-header {
    width: 100%;
    padding-bottom: 5px;
    ${media.phone`
      flex-direction: column;
      border-bottom: 1px solid #eee;
    `};
    @media (min-width: 768px) and (max-height: 900px) {
      border-bottom: 1px solid #eee;
    }
    .project-title {
      font-size: 20px;
      font-weight: 700;
      ${media.phone`
        font-size: 18px;
      `};
    }
    a,
    a:visited,
    a:active {
      letter-spacing: 1px;
      font-size: 12px;
      color: #39318e;
      text-decoration: none;
      ${media.phone`
        margin: 10px 0;
      `};
    }
  }
  .description {
    padding: 30px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    ${media.phone`
      display: none;
    `};
    @media (min-width: 768px) and (max-height: 900px) {
      display: none;
    }
  }
  .detail {
    margin-top: 20px;
    ${media.phone`
      flex-direction: column;
    `};
    &-title {
      color: #666;
      font-size: 12px;
      ${media.phone`
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      `};
    }
    a,
    a:visited,
    a:active {
      margin-left: 15px;
      color: #39318e;
      text-decoration: none;
      display: flex;
      align-items: flex-start;
      ${media.phone`
        margin: 0 7.5px;
      `};
      .bx {
        font-size: 12px;
        margin-left: 2px;
      }
    }
  }
`;

export { ImageBg, Info };
