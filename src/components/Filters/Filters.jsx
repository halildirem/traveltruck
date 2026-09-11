import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { selectFilters } from '../../redux/filters/selectors';
import { setFilter, toggleEquipment } from '../../redux/filters/slice';
import { fetchCampers } from '../../redux/campers/operations';
import { useClearFilters } from '../../hooks/useClearFilters';
import {
  CAMPER_FORM_OPTIONS,
  ENGINE_OPTIONS,
  TRANSMISSION_OPTIONS,
  EQUIPMENT_OPTIONS,
} from '../../constants/filters';
import styles from './Filters.module.css';

const RadioGroup = ({ legend, name, options, value, onChange }) => (
  <div className={styles.group}>
    <p className={styles.legend}>{legend}</p>
    <div className={styles.options}>
      {options.map((option) => (
        <label key={option.value} className={styles.control}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(value === option.value ? '' : option.value)}
            onClick={() => {
              if (value === option.value) onChange('');
            }}
          />
          <span className={styles.radio} />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const clearFilters = useClearFilters();

  const change = (key, value) => dispatch(setFilter({ key, value }));

  const handleSearch = () => dispatch(fetchCampers());

  return (
    <aside className={styles.sidebar}>
      <div className={styles.field}>
        <span className={styles.label}>Location</span>
        <div className={styles.inputWrap}>
          <Icon name="map" size={20} className={styles.inputIcon} />
          <input
            type="text"
            className={styles.input}
            placeholder="City"
            value={filters.location}
            onChange={(event) => change('location', event.target.value)}
          />
        </div>
      </div>

      <h2 className={styles.title}>Filters</h2>

      <RadioGroup
        legend="Camper form"
        name="form"
        options={CAMPER_FORM_OPTIONS}
        value={filters.form}
        onChange={(value) => change('form', value)}
      />

      <RadioGroup
        legend="Engine"
        name="engine"
        options={ENGINE_OPTIONS}
        value={filters.engine}
        onChange={(value) => change('engine', value)}
      />

      <RadioGroup
        legend="Transmission"
        name="transmission"
        options={TRANSMISSION_OPTIONS}
        value={filters.transmission}
        onChange={(value) => change('transmission', value)}
      />

      <div className={styles.group}>
        <p className={styles.legend}>Equipment</p>
        <div className={styles.optionsGrid}>
          {EQUIPMENT_OPTIONS.map((option) => (
            <label key={option.value} className={styles.control}>
              <input
                type="checkbox"
                name={option.value}
                checked={filters.equipment.includes(option.value)}
                onChange={() => dispatch(toggleEquipment(option.value))}
              />
              <span className={styles.checkbox}>
                <Icon name="check" size={14} />
              </span>
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="secondary" onClick={clearFilters}>
          <Icon name="close" size={18} />
          Clear filters
        </Button>
      </div>
    </aside>
  );
};

export default Filters;
