import { useState } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import cn from 'classnames';

import Layout from '../layout';
import Screens from './screens';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { media, cover, Container } from '../style/theme';

const screens = ['about', 'portfolio', 'contact', 'cv'];

const Home = () => {
  const [activeScreen, setActiveScreen] = useState(null);
  return (
    <Layout meta={{ title: 'fatih telis | frontend developer based in Turkey' }}>
      <Navigation className={cn({ light: activeScreen })}>
        <Container>
          <Logo className="logo" flexDirection="column">
            <Box className="name">fatih telis</Box>
            <Box className="title">frontend developer</Box>
          </Logo>
          <Menu className={cn({ selected: activeScreen })}>
            {screens.map(screen => (
              <li key={screen} className={cn({ active: activeScreen === screen })}>
                <button
                  type="button"
                  onClick={() => {
                    if (!activeScreen) {
                      setActiveScreen(screen);
                    } else {
                      setActiveScreen(null);
                    }
                  }}
                >
                  {screen}
                  <i className={cn('bx', 'bx-x', { active: activeScreen === screen })} />
                </button>
              </li>
            ))}
          </Menu>
        </Container>
      </Navigation>
      <Main>
        <BackgroundAnimation activeScreen={activeScreen} />
        <Screens activeScreen={activeScreen} />
        <PageCurl
          className={cn({ active: !activeScreen })}
          href="https://github.com/fatihtelis/fatihtelis.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="fold" />
          <div className="code" />
        </PageCurl>
      </Main>
    </Layout>
  );
};

const Navigation = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  z-index: 200;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  &.light {
    color: white;
    .logo {
      transition: 0.3s 0.3s;
    }
  }
`;

const Logo = styled(Flex)`
  transition: 0.3s;
  line-height: 1;
  .name {
    font-size: 32px;
  }
  .title {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.6px;
  }
`;

const Menu = styled.ul`
  padding-left: 0;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0;
  li {
    list-style-type: none;
    padding: 0 30px;
    transition: 0.3s;
    transform-origin: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    button {
      position: relative;
      background-color: transparent;
      border: none;
      outline: unset;
      display: flex;
      cursor: pointer;
      transition: 0.3s;
      .bx {
        position: absolute;
        right: -5px;
        top: -5px;
        font-size: 12px;
        opacity: 0;
        &.active {
          opacity: 1;
        }
      }
    }
  }
  &.selected {
    li {
      transition: 0.6s;
      &:not(.active) {
        opacity: 0.5;
        cursor: not-allowed;
        text-decoration: line-through;
        button {
          pointer-events: none;
        }
      }
      &.active {
        opacity: 1;
        transform: scale(1.2);
      }
      button {
        color: white;
        transition: 0.3s 0.3s;
      }
    }
  }
`;

const PageCurl = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 200px;
  z-index: 120;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;
  cursor: alias;
  ${media.tablet`
    width: 160px;
    height: 160px;
  `};
  .fold {
    ${cover()};
    background: url('/static/page-curl/fold.png') center/contain no-repeat;
    z-index: 2;
  }
  .code {
    ${cover()};
    background: url('/static/page-curl/code.png') center/contain no-repeat;
    z-index: 1;
  }
  &.active {
    opacity: 1;
    pointer-events: visible;
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Home;
