import ScreenWrapper from './style';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Cv from './cv';

const Screens = ({ activeScreen }) => (
  <ScreenWrapper justiftContent="center" alignItems="center" flexDirection="column">
    <About active={activeScreen === 'about'} />
    <Portfolio active={activeScreen === 'portfolio'} />
    <Contact active={activeScreen === 'contact'} />
    <Cv active={activeScreen === 'cv'} />
  </ScreenWrapper>
);

export default Screens;
