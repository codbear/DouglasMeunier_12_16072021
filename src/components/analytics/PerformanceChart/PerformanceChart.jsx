import PropTypes from 'prop-types';

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

import './PerformanceChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
};

const PerformanceChart = ({ data }) => {
  return (
    <div className="PerformanceChart">
      <ResponsiveContainer>
        <RadarChart outerRadius={'60%'} data={data}>
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
    </div>
  );
};

PerformanceChart.propTypes = propTypes;

export default PerformanceChart;
