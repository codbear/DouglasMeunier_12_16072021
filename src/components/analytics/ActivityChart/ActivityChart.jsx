import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import './ActivityChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';
import { ActivityChartTooltip } from '../ActivityChartTooltip';
import { ActivityChartLegend } from '../ActivityChartLegend';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

const defaultProps = {
  data: [],
};

const ActivityChart = ({ data }) => {
  return (
    <div className="ActivityChart">
      <ResponsiveContainer>
        <BarChart data={data} barGap={8}>
          <CartesianGrid vertical={false} stroke={CHARTS_PALETTE.STROKE} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis orientation="right" tickCount={3} tickLine={false} axisLine={false} />
          <Tooltip content={<ActivityChartTooltip />} />
          <Legend
            verticalAlign="top"
            content={<ActivityChartLegend />}
            wrapperStyle={{ paddingBottom: '65px' }}
          />
          <Bar
            dataKey="kilogram"
            fill={CHARTS_PALETTE.SECONDARY}
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar dataKey="calories" fill={CHARTS_PALETTE.PRIMARY} barSize={7} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = propTypes;
ActivityChart.defaultProps = defaultProps;

export default ActivityChart;
