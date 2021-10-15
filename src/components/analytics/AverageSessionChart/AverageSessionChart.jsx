import PropTypes from 'prop-types';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import './AverageSessionChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';
import { AverageSessionChartTooltip } from '../AverageSessionChartTooltip';
import { useUserAverageSessions } from '../../../sdk';
import { adaptUserAverageSessions } from '../../../services';

const propTypes = {
  userId: PropTypes.number,
};

const defaultProps = {
  userId: null,
};

/**
 * @description Render a line chart representing the average sessions time of the user
 * @return {JSX.Element}
 * @constructor
 */
const AverageSessionChart = ({ userId }) => {
  const { isLoading, data } = useUserAverageSessions(userId);

  return (
    <div className="AverageSessionChart">
      <p className="AverageSessionChart_title">Durée moyenne des sessions</p>
      {!isLoading && (
        <ResponsiveContainer>
          <LineChart
            data={adaptUserAverageSessions(data)}
            margin={{
              top: 70,
              left: 8,
              right: 8,
            }}
          >
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: CHARTS_PALETTE.TEXT_CONTRASTED }}
              height={46}
              dy={16}
            />

            <Tooltip content={<AverageSessionChartTooltip />} />

            <Line
              type="monotoneX"
              dataKey="sessionLength"
              stroke={CHARTS_PALETTE.TEXT_CONTRASTED}
              dot={false}
              activeDot={{ stroke: 'white', strokeWidth: 1, r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

AverageSessionChart.propTypes = propTypes;
AverageSessionChart.defaultProps = defaultProps;

export default AverageSessionChart;
