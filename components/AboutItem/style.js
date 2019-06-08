import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { colors } from '../../style/theme';

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

export default Outer;
