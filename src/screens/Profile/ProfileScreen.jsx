import './ProfileScreen.scss';
import { Layout, KeyDataCard, ActivityChart, AverageSessionChart } from '../../components';
import CaloriesIcon from '../../vectors/calories-icon.svg';
import CarbsIcon from '../../vectors/carbs-icon.svg';
import FatIcon from '../../vectors/fat-icon.svg';
import ProteinsIcon from '../../vectors/protein-icon.svg';

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

const userActivity = [
  {
    day: 1,
    kilogram: 80,
    calories: 240,
  },
  {
    day: 2,
    kilogram: 80,
    calories: 220,
  },
  {
    day: 3,
    kilogram: 81,
    calories: 280,
  },
  {
    day: 4,
    kilogram: 81,
    calories: 290,
  },
  {
    day: 5,
    kilogram: 80,
    calories: 160,
  },
  {
    day: 6,
    kilogram: 78,
    calories: 162,
  },
  {
    day: 7,
    kilogram: 76,
    calories: 390,
  },
];

const userSession = [
  {
    day: 'L',
    sessionLength: 30,
  },
  {
    day: 'M',
    sessionLength: 23,
  },
  {
    day: 'M',
    sessionLength: 45,
  },
  {
    day: 'J',
    sessionLength: 50,
  },
  {
    day: 'V',
    sessionLength: 0,
  },
  {
    day: 'S',
    sessionLength: 0,
  },
  {
    day: 'D',
    sessionLength: 60,
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
          <div className="Profile_chart Profile_chart--large">
            <ActivityChart data={userActivity} />
          </div>
          <div className="Profile_chart">
            <AverageSessionChart data={userSession} />
          </div>
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
