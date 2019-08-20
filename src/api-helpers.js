import axios from 'axios';

export const fetchSingleQuote = async quoteId => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL_BASE}/${quoteId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchQuotes = async (searchBy, search, sort, page) => {
  const searchQuery = search ? `&${searchBy}=${search}` : '';
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL_BASE}?sortBy=${sort}${searchQuery}&page=${page}`);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
