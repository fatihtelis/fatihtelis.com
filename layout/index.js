import Head from './head';
import GlobalStyle from '../style';

const Layout = ({ children, meta }) => (
  <>
    <Head {...meta} />
    <GlobalStyle />
    {children}
  </>
);

Layout.defaultProps = { meta: {} };

export default Layout;
