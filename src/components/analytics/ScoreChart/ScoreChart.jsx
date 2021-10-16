import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import './ScoreChart.scss';
import CHARTS_PALETTE from '../../../theme/chartsPalette';
import { useUserScore } from '../../../sdk';
import { adaptUserScore } from '../../../services';

const propTypes = {
  userId: PropTypes.number,
};

const defaultProps = {
  userId: null,
};

/**
 * @description Render a chart representing the score of the user in percentage
 * @return {JSX.Element}
 * @constructor
 */
const ScoreChart = ({ userId }) => {
  const { isLoading, data } = useUserScore(userId);
  const todayScore = data * 100;

  return (
    <div className="ScoreChart">
      <p className="ScoreChart_title">Score</p>
      {!isLoading && (
        <>
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
              data={adaptUserScore(todayScore)}
              startAngle={90}
              endAngle={450}
            >
              <RadialBar dataKey="todayScore" fill={CHARTS_PALETTE.PRIMARY} cornerRadius={5} />
            </RadialBarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

ScoreChart.propTypes = propTypes;
ScoreChart.defaultProps = defaultProps;

export default ScoreChart;
