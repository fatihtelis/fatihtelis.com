import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { colors } from '../style/theme';

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
  .text {
    padding: 20px;
  }
  .bx {
    width: 100px;
    min-width: 100px;
    height: 100px;
    line-height: 100px;
    border-right: 1px solid #eee;
    font-size: 42px;
    text-align: center;
  }
`;

export default AboutItem;
