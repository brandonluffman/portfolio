import Footer from './Footer';
import Loading from './Loading';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div>
    <Loading />
    {children}
  </div>
);

export default Layout;