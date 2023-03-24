import axios from 'axios';

const BASE = 'https://api.unsplash.com/';

const serachImages = async (term) => {
  const resp = await axios.get(`${BASE}/search/photos`, {
    headers: {
      Authorization: 'Client-ID'
    },
    params: {
      query: term
    }
  });

  return resp.data.results;
}


export default serachImages;