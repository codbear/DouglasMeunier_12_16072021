import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

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
import { useUserActivity } from '../../../sdk';
import { adaptUserActivity } from '../../../services';

const propTypes = {
  userId: PropTypes.number,
};

const defaultProps = {
  userId: null,
};

/**
 * @description Render a bar chart representing the activity of the user
 * @return {JSX.Element}
 */
const ActivityChart = ({ userId }) => {
  const [state, setState] = useState(0);
  const { isLoading, data } = useUserActivity(userId);

  useEffect(() => {
    if (!isLoading) {
      setState(1);
    }
  }, [isLoading]);

  return (
    <div className="ActivityChart" key={state}>
      {!isLoading && (
        <ResponsiveContainer>
          <BarChart data={adaptUserActivity(data)} barGap={8}>
            <CartesianGrid vertical={false} stroke={CHARTS_PALETTE.STROKE} />

            <XAxis dataKey="day" tickLine={false} axisLine={false} height={46} dy={16} />
            <YAxis
              orientation="right"
              tickCount={3}
              tickLine={false}
              axisLine={false}
              width={56}
              dx={16}
            />

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
            <Bar
              dataKey="calories"
              fill={CHARTS_PALETTE.PRIMARY}
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

ActivityChart.propTypes = propTypes;
ActivityChart.defaultProps = defaultProps;

export default ActivityChart;
