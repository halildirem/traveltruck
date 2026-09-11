const FORM_LABELS = {
  alcove: 'Alcove',
  panelTruck: 'Panel van',
  fullyIntegrated: 'Fully integrated',
  semiIntegrated: 'Semi integrated',
};

const EQUIPMENT = [
  ['bathroom', 'Bathroom'],
  ['kitchen', 'Kitchen'],
  ['TV', 'TV'],
  ['radio', 'Radio'],
  ['refrigerator', 'Refrigerator'],
  ['microwave', 'Microwave'],
  ['gas', 'Gas'],
  ['water', 'Water'],
];

const capitalize = (value = '') =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : value;

const getFormLabel = (form) => FORM_LABELS[form] ?? capitalize(form);

const withUnitSpace = (value = '') =>
  String(value).replace(/([\d.]+)\s*([a-zA-Z]+)/, '$1 $2');

export const getCardFeatures = (camper) => [
  { label: capitalize(camper.engine), icon: 'engine' },
  { label: capitalize(camper.transmission), icon: 'transmission' },
  { label: getFormLabel(camper.form), icon: 'form' },
];

export const getDetailFeatures = (camper) => {
  const features = [];
  if (camper.transmission) features.push(capitalize(camper.transmission));
  if (camper.AC) features.push('AC');
  if (camper.engine) features.push(capitalize(camper.engine));
  EQUIPMENT.forEach(([key, label]) => {
    if (camper[key]) features.push(label);
  });
  if (camper.form) features.push(getFormLabel(camper.form));
  return features;
};

export const getCamperSpecs = (camper) => [
  { label: 'Form', value: getFormLabel(camper.form) },
  { label: 'Length', value: withUnitSpace(camper.length) },
  { label: 'Width', value: withUnitSpace(camper.width) },
  { label: 'Height', value: withUnitSpace(camper.height) },
  { label: 'Tank', value: withUnitSpace(camper.tank) },
  { label: 'Consumption', value: withUnitSpace(camper.consumption) },
];
