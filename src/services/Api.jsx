import axios from 'axios';

const API_KEY = '9073999c285844087924fd0e24160fae';
const URL = 'https://api.themoviedb.org/3/';

export const getApi = async (apiType, dataSubmit) => {
  const response = await axios.get(
    `${URL}${apiType}?api_key=${API_KEY}${
      dataSubmit ? `&query=${dataSubmit}` : ''
    }&language=en-US`
  );
  // console.log(response);
  return response;
};
