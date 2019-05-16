import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { cover } from '../style/theme';

const Section = styled(Flex).attrs({ as: 'section' })`
  ${cover()};
  opacity: ${props => (props.active ? '1' : '0')};
  pointer-events: ${props => (props.active ? 'visible' : 'none')};
  transition: ${props => (props.active ? '1s 0.4s' : '0.1s')};
  color: white;
`;

export default Section;
