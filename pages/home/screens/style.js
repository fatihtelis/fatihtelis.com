import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { cover } from '../../../style/theme';

const ScreenWrapper = styled(Flex)`
  ${cover()};
  margin-top: 100px;
  z-index: 100;
`;

export default ScreenWrapper;
