import PropTypes from 'prop-types';

import './ActivityChartTooltip.scss';

const propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

const defaultProps = {
  payload: [],
};

const ActivityChartTooltip = ({ payload }) => {
  const kilogram = payload[0] || {};
  const calories = payload[1] || {};

  return (
    <div className="ActivityChartTooltip">
      <p className="ActivityChartTooltip_content">{kilogram.value}kg</p>
      <p className="ActivityChartTooltip_content">{calories.value}Kcal</p>
    </div>
  );
};

ActivityChartTooltip.propTypes = propTypes;
ActivityChartTooltip.defaultProps = defaultProps;

export default ActivityChartTooltip;
