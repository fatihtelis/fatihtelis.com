import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { container, media } from '../../../../style/theme';

const Screen = styled(Flex)`
  ${container};
  padding: 40px 0;
  h2 {
    font-weight: 700;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
    ${media.phone`
      font-size: 20px;
    `};
  }
  a {
    position: relative;
    top: 40px;
    opacity: 0;
    font-size: 36px;
    color: white;
    margin: 0 10px;
    ${media.phone`
      font-size: 30px;
    `};
  }
`;

export default Screen;
