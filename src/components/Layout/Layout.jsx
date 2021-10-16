import { Header } from '../Header';
import { SideNav } from '../SideNav';
import './Layout.scss';

/**
 * @description Create the layout of the page. Use it at the top level of a screen component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
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
