import PropTypes from 'prop-types';

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

import './PerformanceChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';
import { useUserPerformance } from '../../../sdk';
import { adaptUserPerformance } from '../../../services';

const propTypes = {
  userId: PropTypes.number,
};

const defaultProps = {
  userId: null,
};

/**
 * @description Render a radar chart representing the performances of the user
 * @return {JSX.Element}
 * @constructor
 */
const PerformanceChart = ({ userId }) => {
  const { isLoading, data } = useUserPerformance(userId);

  return (
    <div className="PerformanceChart">
      {!isLoading && (
        <ResponsiveContainer>
          <RadarChart outerRadius={'60%'} data={adaptUserPerformance(data)}>
            <PolarGrid stroke={CHARTS_PALETTE.TEXT_CONTRASTED} />
            <PolarAngleAxis
              dataKey="kind"
              stroke={CHARTS_PALETTE.TEXT_CONTRASTED}
              tickLine={false}
              axisLine={false}
            />
            <Radar dataKey="value" fill={CHARTS_PALETTE.PRIMARY} fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

PerformanceChart.propTypes = propTypes;
PerformanceChart.defaultProps = defaultProps;

export default PerformanceChart;
