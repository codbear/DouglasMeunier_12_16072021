import './Header.scss';

const NAV_ITEMS = [
  {
    content: 'Accueil',
  },
  {
    content: 'Profil',
  },
  {
    content: 'Réglage',
  },
  {
    content: 'Communauté',
  },
];

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header_logo">SportSee</h1>
      <nav className="Header_nav">
        <ul>
          {NAV_ITEMS.map((navItem, index) => (
            <li key={index} className="Header_nav_item">
              {navItem.content}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
