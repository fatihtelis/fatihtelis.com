import { createContext } from 'react';
import Head from './head';
import GlobalStyle from '../style';

export const LayoutContext = createContext({ headerBackground: 'transparent' });

const Layout = ({ children, meta, headerBackground = 'transparent' }) => (
  <LayoutContext.Provider value={{ headerBackground }}>
    <Head {...meta} />
    <GlobalStyle />
    {children}
  </LayoutContext.Provider>
);

Layout.defaultProps = { meta: {}, headerBackground: 'transparent' };

export default Layout;
