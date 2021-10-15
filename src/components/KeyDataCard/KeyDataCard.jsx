import PropTypes from 'prop-types';
import './KeyDataCard.scss';

const propTypes = {
  icon: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * @description Render a single card containing a key data
 * @return {JSX.Element}
 * @constructor
 */
const KeyDataCard = ({ icon, count, unit, label }) => {
  return (
    <div className="KeyDataCard">
      <img src={icon} alt="" />
      <div className="KeyDataCard_content">
        <p className="KeyDataCard_content_count">
          {count}
          {unit}
        </p>
        <p className="KeyDataCard_content_label">{label}</p>
      </div>
    </div>
  );
};

KeyDataCard.propTypes = propTypes;

export default KeyDataCard;
