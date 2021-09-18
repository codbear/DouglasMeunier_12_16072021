import { Layout } from '../../components';
import './ProfileScreen.scss';
import CaloriesIcon from '../../vectors/calories-icon.svg';
import CarbsIcon from '../../vectors/carbs-icon.svg';
import FatIcon from '../../vectors/fat-icon.svg';
import ProteinsIcon from '../../vectors/protein-icon.svg';
import { KeyDataCard } from '../../components/KeyDataCard';

const user = {
  firstName: 'Thomas',
};

const keyData = [
  {
    icon: CaloriesIcon,
    label: 'Calories',
    count: 1930,
    unit: 'kCal',
  },
  {
    icon: ProteinsIcon,
    label: 'Protéines',
    count: 155,
    unit: 'g',
  },
  {
    icon: CarbsIcon,
    label: 'Glucides',
    count: 290,
    unit: 'g',
  },
  {
    icon: FatIcon,
    label: 'Lipides',
    count: 50,
    unit: 'g',
  },
];

const ProfileScreen = () => {
  return (
    <Layout>
      <p className="Profile_hello">
        Bonjour <span className="Profile_hello_firstName">{user.firstName}</span>
      </p>
      <p className="Profile_greetings">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="Profile_dataGrid">
        <div className="Profile_dataWrapper Profile_chartsWrapper">
          <div className="Profile_chart Profile_chart--large">graph 1</div>
          <div className="Profile_chart">graph 2</div>
          <div className="Profile_chart">graph 3</div>
          <div className="Profile_chart">graph 4</div>
        </div>
        <div className="Profile_dataWrapper Profile_keyDataWrapper">
          {keyData.map((keyDataItem, index) => (
            <KeyDataCard
              key={index}
              label={keyDataItem.label}
              count={keyDataItem.count}
              unit={keyDataItem.unit}
              icon={keyDataItem.icon}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileScreen;
