import axios from 'axios';

export const fetchQuotes = () => {
  return axios.get('https://auth0-exercise-quotes-api.herokuapp.com/api/quotes')
    .then(res => res.data.results);
};
