import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import './ScoreChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';

const propTypes = {
  todayScore: PropTypes.number.isRequired,
};

const ScoreChart = ({ todayScore }) => {
  const data = [
    {
      todayScore: 100,
    },
    {
      todayScore,
    },
  ];

  return (
    <div className="ScoreChart">
      <p className="ScoreChart_title">Score</p>
      <div className="ScoreChart_legend">
        <p>
          <span className="ScoreChart_legend_score">{todayScore}%</span> de votre objectif
        </p>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="10%"
          outerRadius={160}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar dataKey="todayScore" fill={CHARTS_PALETTE.PRIMARY} cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreChart.propTypes = propTypes;

export default ScoreChart;
