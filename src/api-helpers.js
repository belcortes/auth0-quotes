import axios from 'axios';

export const fetchSingleQuote = async quoteId => {
  const res = await axios.get(`https://auth0-exercise-quotes-api.herokuapp.com/api/quotes/${quoteId}`);
  console.log(res.data)
  return res.data;
};

export const fetchQuotes = async () => {
  const res = await axios.get('https://auth0-exercise-quotes-api.herokuapp.com/api/quotes');
  return res.data.results;
};

export const fetchSearchedQuotes = async search => {
  const res = await axios.get(`https://auth0-exercise-quotes-api.herokuapp.com/api/quotes?text=${search}`)
  return res.data.results
};

export const fetchSortedQuotes = async value => {
  const res = await axios.get(`https://auth0-exercise-quotes-api.herokuapp.com/api/quotes?sortBy=${value}`)
  return res.data.results
};
