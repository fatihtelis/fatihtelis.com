import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { media, cover } from '../../style/theme';

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
    ${media.phone`
      align-items: flex-start;
      padding-top: 20px;
    `};
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
  white-space: nowrap;
  .name {
    font-size: 32px;
    ${media.phone`
      font-size: 28px;
    `};
  }
  .title {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.6px;
    ${media.phone`
      font-size: 12px;
    `};
  }
`;

const Menu = styled.ul`
  padding-left: 0;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  ${media.phone`
    flex-direction: column;
    align-items: flex-end;
  `};
  li {
    list-style-type: none;
    padding: 0 30px;
    transition: 0.3s;
    transform-origin: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    ${media.phone`
      padding: 0 0 5px;
    `};
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
      ${media.phone`
        transition: 0s;
      `};
      &:not(.active) {
        opacity: 0.5;
        cursor: not-allowed;
        text-decoration: line-through;
        ${media.phone`
          opacity: 0;
          height: 0;
          pointer-events: none;
          padding: 0;
        `};
        button {
          pointer-events: none;
        }
      }
      &.active {
        opacity: 1;
        transform: scale(1.2);
        ${media.phone`
          transform: none;
          padding: 10px 0 0;
        `};
      }
      button {
        color: white;
        transition: 0.3s 0.3s;
      }
    }
  }
`;

const Main = styled.main`
  ${cover('fixed')};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Navigation, Logo, Menu, Main };
