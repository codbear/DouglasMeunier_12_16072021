import { Header } from '../Header';
import { SideNav } from '../SideNav';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      <main className="MainContent">{children}</main>
    </>
  );
};

export default Layout;
