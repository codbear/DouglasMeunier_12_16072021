import './SideNav.scss';
import BikeIcon from '../../vectors/bikeIcon.svg';
import DumbbellIcon from '../../vectors/dumbbellIcon.svg';
import SwimIcon from '../../vectors/swimIcon.svg';
import YogaIcon from '../../vectors/yogaIcon.svg';

const NAV_ITEMS = [
  {
    icon: YogaIcon,
  },
  {
    icon: SwimIcon,
  },
  {
    icon: BikeIcon,
  },
  {
    icon: DumbbellIcon,
  },
];

const SideNav = () => {
  return (
    <nav className="SideNav">
      <ul>
        {NAV_ITEMS.map((navItem, index) => (
          <li className="SideNav_item">
            <img src={navItem.icon} alt="" />
          </li>
        ))}
      </ul>
      <p className="SideNav_copyright">Copyright, SportSee 2020</p>
    </nav>
  );
};

export default SideNav;
