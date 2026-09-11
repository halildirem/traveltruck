export const formatPrice = (price) => {
  const value = Number(price) || 0;
  return `€${value.toFixed(2)}`;
};

export const formatLocation = (location = '') => {
  const parts = location.split(',').map((part) => part.trim()).filter(Boolean);
  return parts.reverse().join(', ');
};

