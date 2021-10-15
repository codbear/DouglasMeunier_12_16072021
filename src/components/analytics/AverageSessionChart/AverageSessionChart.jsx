import PropTypes from 'prop-types';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import './AverageSessionChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';
import { AverageSessionChartTooltip } from '../AverageSessionChartTooltip';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
};

const AverageSessionChart = ({ data }) => {
  return (
    <div className="AverageSessionChart">
      <p className="AverageSessionChart_title">Durée moyenne des sessions</p>
      <ResponsiveContainer>
        <LineChart
          data={data}
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
    </div>
  );
};

AverageSessionChart.propTypes = propTypes;

export default AverageSessionChart;
