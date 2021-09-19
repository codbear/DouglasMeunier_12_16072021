import './ActivityChartLegend.scss';

const ActivityChartLegend = () => (
  <div className="ActivityChartLegend">
    <p>Activité quotidienne</p>
    <ul className="ActivityChartLegend_itemsList">
      <li className="ActivityChartLegend_item">Poids (kg)</li>
      <li className="ActivityChartLegend_item">Calories brûlées (Kcal)</li>
    </ul>
  </div>
);

export default ActivityChartLegend;
