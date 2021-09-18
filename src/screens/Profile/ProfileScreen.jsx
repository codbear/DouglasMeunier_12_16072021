import { Layout } from '../../components';
import './ProfileScreen.scss';

const user = {
  firstName: 'Thomas',
};

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
        <div className="Profile_dataWrapper Profile_statsWrapper">
          <div className="Profile_stat">stat 1</div>
          <div className="Profile_stat">stat 2</div>
          <div className="Profile_stat">stat 3</div>
          <div className="Profile_stat">stat 4</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileScreen;
