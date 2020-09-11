import { Flex, Box } from '@rebass/grid';
import cn from 'classnames';
import Outer from './style';

const AboutItem = ({ innerRef, data: { icon, title, text }, index, total }) => (
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

export default AboutItem;
