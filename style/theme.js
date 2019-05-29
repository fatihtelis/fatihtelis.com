import styled, { css } from 'styled-components';
import cn from 'classnames';

export const colors = {
  font: '#2c3e50',
};

export const cover = pos => `position:${pos || 'absolute'}; top: 0; bottom: 0; left: 0; right: 0;`;

const sizes = {
  giant: 1460,
  desktop: 1280,
  tablet: 1024,
  phone: 768,
  mini: 414,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...style) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...style)};
    }
  `;
  return accumulator;
}, {});

export const container = css`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  ${media.giant`
    padding:0 40px;
    max-width:100%;
  `};
  ${media.tablet`
    padding:0 20px;
  `};
  ${media.mini`
    padding:0 15px;
  `};
`;

const ContainerOuter = styled.div`
  ${container};
`;

export const Container = ({ className, children }) => (
  <ContainerOuter className={cn('container', className)}>{children}</ContainerOuter>
);
