import './ProfileScreen.scss';
import {
  Layout,
  KeyDataCard,
  ActivityChart,
  AverageSessionChart,
  PerformanceChart,
  ScoreChart,
} from '../../components';

import { useCurrentUser, useUserKeyData } from '../../sdk';

import { adaptUserKeyData } from '../../services';

/**
 * @description Render the profile screen
 * @return {JSX.Element}
 * @constructor
 */
const ProfileScreen = () => {
  const { isLoading: isLoadingUser, currentUser } = useCurrentUser();
  const userId = currentUser?.id;
  const firstName = currentUser?.userInfos?.firstName;

  const { isLoading: isLoadingUserKeyData, data: userKeyData } = useUserKeyData(userId);
  const adaptedUserKeyData = !isLoadingUserKeyData && adaptUserKeyData(userKeyData);

  if (isLoadingUser) {
    return <Layout />;
  }

  return (
    <Layout>
      <p className="Profile_hello">
        Bonjour <span className="Profile_hello_firstName">{firstName}</span>
      </p>

      <p className="Profile_greetings">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <div className="Profile_dataGrid">
        <div className="Profile_dataWrapper Profile_chartsWrapper">
          <div className="Profile_chart Profile_chart--large">
            <ActivityChart userId={userId} />
          </div>

          <div className="Profile_chart">
            <AverageSessionChart userId={userId} />
          </div>

          <div className="Profile_chart">
            <PerformanceChart userId={userId} />
          </div>

          <div className="Profile_chart">
            <ScoreChart userId={userId} />
          </div>
        </div>

        <div className="Profile_dataWrapper Profile_keyDataWrapper">
          {adaptedUserKeyData &&
            adaptedUserKeyData.map((keyDataItem, index) => (
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
