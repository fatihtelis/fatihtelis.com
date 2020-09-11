import { useState } from 'react';
import cn from 'classnames';

import { Navigation, Logo, Menu, Main } from './style';
import Layout from '../../layout';
import Screens from './screens';
import Animation from './animation';
import { Container } from '../../style/theme';

const screens = ['about', 'portfolio', 'contact', 'cv'];

const meta = {
  title: 'fatih telis | frontend developer',
  description:
    'personal website of fatih telis including info, portfolio, contact information and cv',
  ogImage: '/og-image.jpg',
};

const Home = () => {
  const [activeScreen, setActiveScreen] = useState(null);
  return (
    <Layout meta={meta}>
      <Navigation className={cn({ light: activeScreen })}>
        <Container>
          <Logo className="logo" flexDirection="column">
            <div className="name">fatih telis</div>
            <div className="title">frontend developer</div>
          </Logo>
          <Menu className={cn({ selected: activeScreen })}>
            {screens.map(screen => (
              <li key={screen} className={cn({ active: activeScreen === screen })}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveScreen(!activeScreen ? screen : null);
                  }}
                >
                  {screen}
                  <i
                    className={cn('bx', 'bx-x', {
                      active: activeScreen === screen,
                    })}
                  />
                </button>
              </li>
            ))}
          </Menu>
        </Container>
      </Navigation>
      <Main>
        <Animation activeScreen={activeScreen} />
        <Screens activeScreen={activeScreen} />
      </Main>
    </Layout>
  );
};

export default Home;
