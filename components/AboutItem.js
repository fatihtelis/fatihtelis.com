import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { colors, media } from '../style/theme';

const AboutItem = ({ innerRef, data: { icon, text } }) => (
  <Outer ref={innerRef} className="about-item" alignItems="center">
    <Box className={`bx ${icon}`} />
    <Box className="text">{text}</Box>
  </Outer>
);

const Outer = styled(Flex)`
  background-color: white;
  border-radius: 4px;
  height: 100px;
  color: ${colors.font};
  ${media.tablet`
    height: auto;
  `};
  .text {
    padding: 20px;
    ${media.tablet`
      padding: 15px 20px;
    `};
  }
  .bx {
    width: 100px;
    min-width: 100px;
    height: 100px;
    line-height: 100px;
    border-right: 1px solid #eee;
    font-size: 42px;
    text-align: center;
    ${media.tablet`
      height: auto;
      line-height: auto;
      width: 60px;
      min-width: 60px;
      font-size: 36px;
    `};
  }
`;

export default AboutItem;
