import FeaturesList from '../FeaturesList/FeaturesList';
import { getDetailFeatures, getCamperSpecs } from '../../utils/camperFeatures';
import styles from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => (
  <div className={styles.panel}>
    <h2 className={styles.heading}>Vehicle details</h2>

    <FeaturesList items={getDetailFeatures(camper)} className={styles.features} />

    <dl className={styles.specs}>
      {getCamperSpecs(camper).map(({ label, value }) => (
        <div key={label} className={styles.row}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export default VehicleDetails;
