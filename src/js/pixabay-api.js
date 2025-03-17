import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  const { data } = await axios.get('', {
    params: {
      key: '49383072-7b2484b2a76b3ff56b3486fe5',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return data.hits;
};
