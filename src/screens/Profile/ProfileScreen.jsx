import './ProfileScreen.scss';
import {
  Layout,
  KeyDataCard,
  ActivityChart,
  AverageSessionChart,
  PerformanceChart,
  ScoreChart,
} from '../../components';

import {
  useCurrentUser,
  useUserActivity,
  useUserAverageSessions,
  useUserKeyData,
  useUserPerformance,
  useUserScore,
} from '../../sdk';

import {
  adaptUserActivity,
  adaptUserAverageSessions,
  adaptUserKeyData,
  adaptUserPerformance,
  adaptUserScore,
} from '../../services';

/**
 * @description Render the profile screen
 * @return {JSX.Element}
 * @constructor
 */
const ProfileScreen = () => {
  const { isLoading: isLoadingUser, currentUser } = useCurrentUser();
  const firstName = currentUser?.userInfos?.firstName;
  const { isLoading: isLoadingUserActivity, data: userActivity } = useUserActivity(currentUser?.id);
  const { isLoading: isLoadingUserAverageSession, data: userAverageSessions } =
    useUserAverageSessions(currentUser?.id);
  const { isLoading: isLoadingUserKeyData, data: userKeyData } = useUserKeyData(currentUser?.id);
  const { isLoading: isLoadingUserPerformance, data: userPerformance } = useUserPerformance(
    currentUser?.id
  );
  const { isLoading: isLoadingUserScore, data: userScore } = useUserScore(currentUser?.id);

  const isLoading =
    isLoadingUser ||
    isLoadingUserActivity ||
    isLoadingUserAverageSession ||
    isLoadingUserKeyData ||
    isLoadingUserPerformance ||
    isLoadingUserScore;

  if (isLoading) {
    return <Layout />;
  }

  const adaptedUserActivity = adaptUserActivity(userActivity);
  const adaptedUserAverageSession = adaptUserAverageSessions(userAverageSessions);
  const adaptedUserKeyData = adaptUserKeyData(userKeyData);
  const adaptedUserPerformance = adaptUserPerformance(userPerformance);
  const adaptedUserScore = adaptUserScore(userScore);

  return (
    <Layout>
      <p className="Profile_hello">
        Bonjour <span className="Profile_hello_firstName">{firstName}</span>
      </p>

      <p className="Profile_greetings">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <div className="Profile_dataGrid">
        <div className="Profile_dataWrapper Profile_chartsWrapper">
          <div className="Profile_chart Profile_chart--large">
            <ActivityChart data={adaptedUserActivity} />
          </div>

          <div className="Profile_chart">
            <AverageSessionChart data={adaptedUserAverageSession} />
          </div>

          <div className="Profile_chart">
            <PerformanceChart data={adaptedUserPerformance} />
          </div>

          <div className="Profile_chart">
            <ScoreChart todayScore={adaptedUserScore} />
          </div>
        </div>

        <div className="Profile_dataWrapper Profile_keyDataWrapper">
          {adaptedUserKeyData.map((keyDataItem, index) => (
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
