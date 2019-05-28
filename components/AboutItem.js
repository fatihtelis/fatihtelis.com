import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { colors } from '../style/theme';

const AboutItem = ({
  innerRef, data: { icon, text }, index, total,
}) => (
  <Outer
    ref={innerRef}
    className="about-item"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Box className={`bx ${icon}`} />
    <Flex className="text" alignItems="center">
      {text}
    </Flex>
    <Flex className="fraction" alignItems="flex-end" aria-hidden="true">
      <Box className="index">{index}</Box>
      <Box>/</Box>
      <Box className="total">{total}</Box>
    </Flex>
  </Outer>
);

const Outer = styled(Flex)`
  background-color: white;
  border-radius: 4px;
  height: 100%;
  color: ${colors.font};
  position: relative;
  .bx {
    width: 100%;
    min-width: 100px;
    height: 75px;
    line-height: 75px;
    font-size: 42px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  .text {
    height: calc(100% - 75px);
    padding: 30px 20px;
    text-align: center;
  }
  .fraction {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ddd;
    font-weight: 300;
    .index {
      font-size: 21px;
    }
    .total {
      font-size: 12px;
    }
  }
`;

export default AboutItem;
