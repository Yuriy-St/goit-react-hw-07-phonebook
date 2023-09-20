import axios from 'axios';

axios.defaults.baseURL = 'https://6500134018c34dee0cd4441e.mockapi.io/';

export const fetchAllContacts = async () => {
  const data = await processQuery({
    url: '/contacts',
    method: 'get',
  });
  return data;
};

export const fetchContact = async id => {
  const data = await processQuery({
    url: `/contacts/${id}`,
    method: 'get',
  });
  return data;
};

export const addContact = async (contact = {}) => {
  const data = await processQuery({
    url: `/contacts`,
    method: 'post',
    data: contact,
  });
  return data;
};

export const deleteContact = async id => {
  const data = await processQuery({
    url: `/contacts/${id}`,
    method: 'delete',
  });
  return data;
};

const processQuery = async options => {
  try {
    const response = await axios(options);
    if (response.status >= 300) throw response;
    return response.data;
  } catch (err) {
    const { response } = err;
    throw response?.data || response || err;
  }
};
