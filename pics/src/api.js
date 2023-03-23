import axios from 'axios';

const BASE = 'https://api.unsplash.com/';

const serachImages = async (term) => {
  const resp = await axios.get(`${BASE}/search/photos`, {
    headers: {
      Authorization: 'Client-ID 0oGTj2EKkldhhMEIj-O0o6s3dFOk17uRpl4K0xpZ-jM'
    },
    params: {
      query: term
    }
  });

  return resp;
}


export default serachImages;