import axios from 'axios';

axios.defaults.baseURL = 'https://6500134018c34dee0cd4441e.mockapi.io/';

export const fetchContacts = async () => {
  const { data } = await processQuery({
    url: '/contacts',
    method: 'get',
  });
  return data;
};

export const fetchSingleContact = async id => {
  const { data } = await processQuery({
    url: `/contacts/${id}`,
    method: 'get',
  });
  return data;
};

export const setContacts = async (requestData = {}) => {
  const { data } = await processQuery({
    url: `/contacts`,
    method: 'post',
    data: requestData,
  });
  return data;
};

export const deleteContact = async id => {
  const { data } = await processQuery({
    url: `/contacts/${id}`,
    method: 'delete',
  });
  return data;
};

const processQuery = async options => {
  try {
    const { status, data } = await axios(options);
    if (status !== 200) throw data;
    return data;
  } catch (err) {
    const { response } = err;

    if (response?.data) {
      console.error(response.data);
    } else {
      console.error(response || err);
    }

    throw new Error('Something went wrong. Try reload the page.');
  }
};
