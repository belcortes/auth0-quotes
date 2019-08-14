import axios from 'axios';

const URL_BASE = 'https://auth0-exercise-quotes-api.herokuapp.com/api/quotes';

export const fetchSingleQuote = async quoteId => {
  const res = await axios.get(`${URL_BASE}/${quoteId}`);
  return res.data;
};

export const fetchQuotes = async (searchBy, search, filter, page) => {
  const searchQuery = search ? `&${searchBy}=${search}` : ''
  const res = await axios.get(`${URL_BASE}?sortBy=${filter}${searchQuery}&page=${page}`);
  return res.data.results;
};
