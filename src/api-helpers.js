import axios from 'axios';

export const fetchSingleQuote = async quoteId => {
  const res = await axios.get(`${process.env.REACT_APP_URL_BASE}/${quoteId}`);
  return res.data;
};

export const fetchQuotes = async (searchBy, search, sort, page) => {
  const searchQuery = search ? `&${searchBy}=${search}` : '';
  const res = await axios.get(`${process.env.REACT_APP_URL_BASE}?sortBy=${sort}${searchQuery}&page=${page}`);
  return res.data.results;
};
