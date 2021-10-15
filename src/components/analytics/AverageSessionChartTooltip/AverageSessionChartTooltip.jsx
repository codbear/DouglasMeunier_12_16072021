import PropTypes from 'prop-types';

import './AverageSessionChartTooltip.scss';

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

/**
 * @description Render the tooltip to display when hovering the AverageSessionChart
 * @return {JSX.Element}
 * @constructor
 */
const AverageSessionChartTooltip = ({ payload }) => {
  const time = payload[0] || {};

  return (
    <div className="AverageSessionChartTooltip">
      <p className="AverageSessionChartTooltip_content">{time.value} min</p>
    </div>
  );
};

AverageSessionChartTooltip.propTypes = propTypes;
AverageSessionChartTooltip.defaultProps = defaultProps;

export default AverageSessionChartTooltip;
