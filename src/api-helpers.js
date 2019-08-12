import axios from 'axios';

const URL_BASE = 'https://auth0-exercise-quotes-api.herokuapp.com/api/quotes';

export const fetchSingleQuote = async quoteId => {
  const res = await axios.get(`${URL_BASE}/${quoteId}`);
  return res.data;
};

export const fetchQuotes = async (searchBy, search, filter) => {
  const res = await axios.get(`${URL_BASE}?sortBy=${filter}&${searchBy}=${search}`);
  return res.data.results;
  // https://auth0-exercise-quotes-api.herokuapp.com/api/quotes?sortBy=text&text=fire
  // https://auth0-exercise-quotes-api.herokuapp.com/api/quotes?text=fire?sortBy=text
};

// export const fetchSearchedQuotes = async (search, searchBy) => {
//   const res = await axios.get(`${URL_BASE}?${searchBy}=${search}`);
//   return res.data.results;
// };
//
// export const fetchSortedQuotes = async filter => {
//   const res = await axios.get(`${URL_BASE}?sortBy=${filter}`);
//   return res.data.results;
// };
