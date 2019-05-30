import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { cover } from '../style/theme';

const Section = styled(Flex).attrs({ as: 'section' })`
  ${cover()};
  opacity: ${props => (props.active ? '1' : '0')};
  pointer-events: ${props => (props.active ? 'visible' : 'none')};
  transition: ${props => (props.active ? '1s 0.45s' : '0.1s')};
  overflow-y: ${props => (props.active ? 'auto' : 'hidden')};
  color: white;
`;

export default Section;
