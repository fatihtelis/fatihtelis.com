import Head from './head';
import GlobalStyle from '../style';
import Normalize from '../style/normalize';

const Layout = ({ children, meta }) => (
  <>
    <Head {...meta} />
    <Normalize />
    <GlobalStyle />
    {children}
  </>
);

Layout.defaultProps = { meta: {} };

export default Layout;
