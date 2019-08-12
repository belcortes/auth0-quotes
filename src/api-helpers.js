import axios from 'axios';

const URL_BASE = 'https://auth0-exercise-quotes-api.herokuapp.com/api/quotes';

export const fetchSingleQuote = async quoteId => {
  const res = await axios.get(`${URL_BASE}/${quoteId}`);
  return res.data;
};

export const fetchQuotes = async () => {
  const res = await axios.get(URL_BASE);
  return res.data;
};

export const fetchSearchedQuotes = async (search, searchBy) => {
  console.log(searchBy, search)
  let res;
  if(searchBy) {
    res = await axios.get(`${URL_BASE}?${searchBy}=${search}`);
  } else {
    res = await axios.get(`${URL_BASE}?text=${search}`);
  }

  return res.data;
};

export const fetchSortedQuotes = async filter => {
  const res = await axios.get(`${URL_BASE}?sortBy=${filter}`);
  return res.data;
};

// export const fetchPages = async (page, search, filter) => {
//   let res;
//   if (search) {
//     res = await axios.get(`${URL_BASE}?text=${search}?page=${page}`);
//   } else if (filter) {
//     res = await axios.get(`${URL_BASE}?sortBy=${filter}?page=${page}`);
//   } else {
//     res = await axios.get(`${URL_BASE}?page=${page}`);
//   }
//
//   return res.data.results;
// };
