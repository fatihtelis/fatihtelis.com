import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import CV from './cv';
import { cover } from '../../style/theme';

const Screens = ({ activeScreen }) => (
  <ScreenWrapper justiftContent="center" alignItems="center" flexDirection="column">
    <About active={activeScreen === 'about'} />
    <Portfolio active={activeScreen === 'portfolio'} />
    <Contact active={activeScreen === 'contact'} />
    <CV active={activeScreen === 'cv'} />
  </ScreenWrapper>
);

const ScreenWrapper = styled(Flex)`
  ${cover()};
  margin-top: 100px;
  z-index: 100;
`;

export default Screens;
