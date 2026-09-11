import axios from 'axios';

const campersApi = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

const buildParams = (filters, page, limit) => {
  const params = { page, limit };

  if (filters.location.trim()) params.location = filters.location.trim();
  if (filters.form) params.form = filters.form;
  if (filters.engine) params.engine = filters.engine;
  if (filters.transmission) params.transmission = filters.transmission;

  filters.equipment.forEach((key) => {
    params[key] = true;
  });

  return params;
};

export const fetchCampersRequest = async ({ filters, page, limit }) => {
  try {
    const { data } = await campersApi.get('/campers', {
      params: buildParams(filters, page, limit),
    });
    return { items: data.items ?? [], total: Number(data.total) || 0 };
  } catch (error) {
    if (error.response?.status === 404) {
      return { items: [], total: 0 };
    }
    throw error;
  }
};

export const fetchCamperByIdRequest = async (id) => {
  const { data } = await campersApi.get(`/campers/${id}`);
  return data;
};
