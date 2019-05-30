import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import cn from 'classnames';
import { colors } from '../style/theme';

const AboutItem = ({
  innerRef, data: { icon, title, text }, index, total,
}) => (
  <Outer
    ref={innerRef}
    className="about-item"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Flex className="header" alignItems="center" justifyContent="center">
      <Box className={cn('bx', icon)} />
      <Box className="title">{title}</Box>
    </Flex>
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
  border-radius: 3px;
  height: 100%;
  color: ${colors.font};
  position: relative;
  .header {
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #eee;
    .bx {
      font-size: 26px;
      text-align: center;
    }
    .title {
      font-size: 18px;
      margin-left: 10px;
      font-weight: 500;
    }
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
      font-size: 18px;
    }
    .total {
      font-size: 12px;
    }
  }
`;

export default AboutItem;
