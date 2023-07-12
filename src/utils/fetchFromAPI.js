import axios from 'axios';

 const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    playlistId: 'RDZiQo7nAkQHU',
    part: 'snippet',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '225dbd971emsh0f0442b635a513dp14a6e4jsned365489d91d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};